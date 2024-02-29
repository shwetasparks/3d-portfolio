import planeScene from "../assets/3d/plane.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const animationName = "Take 001";
    if (isRotating && actions[animationName]) {
      actions[animationName].play();
    } else if (!isRotating && actions[animationName]) {
      actions[animationName].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
