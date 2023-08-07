import React, {useContext, useEffect, useRef, useState} from 'react';
import {useLoader, Canvas, useFrame, useThree} from '@react-three/fiber';
import {TextureLoader} from 'three';
import * as THREE from 'three';
import {GlobalContext} from "../../context/GlobalStateContext.jsx";
import firefliesVertexShader from "./fireflies/vertex.glsl";
import firefliesFragmentShader from "./fireflies/fireflies.glsl";
import moonTexture2 from "../../assets/img/textures/moonr.jpg";
import moonNormal from "../../assets/img/textures/moon_normalr.jpg";

const Model = ({ width }) => {
    const ref = useRef();
    const moonTexture = useLoader(TextureLoader, moonTexture2);
    const normalMap = useLoader(TextureLoader, moonNormal);

    const {camera, size} = useThree();

    useEffect(() => {
        // Cambiar la posición de la cámara
        console.log(width)
        if (width > 1680){
            camera.position.set(-2, 0, 5);
            ref.current.geometry = new THREE.SphereBufferGeometry(2, 80, 80);
        }
        if (width <= 1680){
            camera.position.set(-2.5, 0.2, 5);
            ref.current.geometry = new THREE.SphereBufferGeometry(2, 40, 40);
        }

    },  [size.width, size.height]);

    useFrame(() => {
        ref.current.rotation.y += 0.001; // Incrementa el ángulo de rotación en cada frame
    });

    return (
        <mesh ref={ref}>
            <sphereBufferGeometry args={[2, 80, 80]}/>
            <meshStandardMaterial map={moonTexture} normalMap={normalMap} color={"#a2a2a2"}/>
        </mesh>
    );
};

const Stars = () => {
    const groupRef = useRef();
    const {theme, setTheme, language, setLanguage} = useContext(GlobalContext);
    const [material, setMaterial] = useState(new THREE.ShaderMaterial({
        depthWrite: false,
        uniforms:{
            uPixelRatio: { value: Math.min(window.devicePixelRatio, 2)},
            uSize: {value: 800},
            cRed: {value: 1.0},
            cGreen: {value: 1.0},
            cBlue: {value: 1.0},
            aScale: {value: 2.0}
        },
        vertexShader: firefliesVertexShader,
        fragmentShader: firefliesFragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
    }))

    // Crea una geometría para las estrellas
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    // Genera las coordenadas de las estrellas de manera aleatoria
    for (let i = 0; i < 3000; i++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1500;
        vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    useFrame(() => {
        // Hace que las estrellas roten ligeramente en cada frame
        groupRef.current.rotation.y += 0.001;
    });

    useEffect(()=> {
        if(theme === "dark"){
            setMaterial(new THREE.ShaderMaterial({
                depthWrite: false,
                uniforms:{
                    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2)},
                    uSize: {value: 800},
                    cRed: {value: 1.0},
                    cGreen: {value: 1.0},
                    cBlue: {value: 1.0},
                    aScale: {value: 2.0}
                },
                vertexShader: firefliesVertexShader,
                fragmentShader: firefliesFragmentShader,
                transparent: true,
                blending: THREE.AdditiveBlending
            }));
        }
        if(theme === "light"){
            setMaterial(new THREE.ShaderMaterial({
                depthWrite: false,
                uniforms:{
                    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2)},
                    uSize: {value: 900},
                    cRed: {value: 0},
                    cGreen: {value: 0},
                    cBlue: {value: 0},
                    aScale: {value: 6.0}
                },
                vertexShader: firefliesVertexShader,
                fragmentShader: firefliesFragmentShader,
                transparent: true,
                blending: THREE.AdditiveBlending
            }));
        }
    }, [theme])

    return (
        <group ref={groupRef}>
            <points geometry={geometry} material={material} />
        </group>
    );
};



const Model3D = () => {
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    console.log(screenSize.width)
    // Actualiza el estado del tamaño de la pantalla cuando cambie
    useEffect(() => {
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Canvas>
            <ambientLight intensity={1.2} color="#ffffff"/>
            <directionalLight intensity={1} position={[-20, -10, 10]} color="white"/>
            <Model screenSize={screenSize} width={screenSize.width}/>
            <Stars screenSize={screenSize}/>
        </Canvas>
    );
};

export default Model3D;

