import React, {useEffect, useRef} from 'react';
import {useLoader, Canvas, useFrame, useThree} from '@react-three/fiber';
import {TextureLoader} from 'three';
import * as THREE from 'three';

const Model = () => {
    const ref = useRef();
    const moonTexture = useLoader(TextureLoader, 'src/assets/img/textures/moonr.jpg');
    const normalMap = useLoader(TextureLoader, 'src/assets/img/textures/moon_normalr.jpg');

    const {camera} = useThree();
    useEffect(() => {
        // Cambiar la posición de la cámara
        camera.position.set(-2, 0, 5);
    }, []);

    useFrame(() => {
        ref.current.rotation.y += 0.001; // Incrementa el ángulo de rotación en cada frame
    });

    return (
        <mesh ref={ref}>
            <sphereBufferGeometry args={[2, 80, 80]}/>
            <meshStandardMaterial map={moonTexture} normalMap={normalMap}/>
        </mesh>
    );
};

const Stars = () => {
    const groupRef = useRef();
    // const [varWhite, setVarWhite] = useState('white');

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

    // useEffect(() => {
    //     // Función para actualizar el color del material
    //     const updateMaterialColor = () => {
    //         material.color.set("white");
    //     };
    //
    //     // Observa los cambios en la variable varWhite y actualiza el color del material
    //     const observer = new MutationObserver(updateMaterialColor);
    //     observer.observe(document.documentElement, { attributes: true });
    //
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, [varWhite]);

    useFrame(() => {
        // Hace que las estrellas roten ligeramente en cada frame
        groupRef.current.rotation.y += 0.001;
    });
    //
    // useEffect(() => {
    //     // Función para actualizar la variable varWhite en base al valor de la variable CSS "--white"
    //     const handleCSSVariableChange = () => {
    //         const cssWhiteValue = getComputedStyle(document.documentElement).getPropertyValue('--white').trim();
    //         setVarWhite(cssWhiteValue);
    //     };
    //
    //     // Observa los cambios en la variable CSS "--white" y actualiza varWhite
    //     const observer = new MutationObserver(handleCSSVariableChange);
    //     observer.observe(document.documentElement, { attributes: true });
    //
    //     // Actualiza varWhite con el valor inicial de la variable CSS "--white"
    //     handleCSSVariableChange();
    //
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, []);

    // Crea un material para las estrellas
    const material = new THREE.PointsMaterial({ color: "white" });

    return (
        <group ref={groupRef}>
            <points geometry={geometry} material={material} />
        </group>
    );
};



const Model3D = () => {

    return (
        <Canvas>
            <ambientLight intensity={1.2} color="#ffffff"/>
            <directionalLight intensity={1} position={[-20, -10, 10]} color="white"/>
            <Model/>
            <Stars/>
        </Canvas>
    );
};

export default Model3D;

