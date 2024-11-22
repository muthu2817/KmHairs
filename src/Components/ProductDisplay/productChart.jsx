import React from "react";
import Tree from "react-d3-tree";
import img from '../../assets/hairShowcase.jpg'

const treeData = [
  {
    name: "Parent",
    children: [
      { name: "Child 1" },
      { name: "Child 2", children: [{ name: "Grandchild 1" }] },
    ],
  },
];

const CustomTree = () => {
  const renderCustomNode = ({ nodeDatum }) => (
    <g>
      <circle r={40} fill="green" />
      <text fill="white" x="25" y="5">
        {nodeDatum.name}
      </text>
      <img src={img} alt="" />
    </g>
  );

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Tree
        data={treeData}
        orientation="vertical"
        nodeSize={{ x: 400, y: 300 }}
        renderCustomNodeElement={renderCustomNode}
        pathFunc="straight"
        
        translate={{ x: 300, y: 200 }}
      />
    </div>
  );
};

export default CustomTree;
