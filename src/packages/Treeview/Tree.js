import React, { Component } from "react";

import values from "./Values";

import TreeNode from "./TreeNode";

export default class Tree extends Component {
  getRootNodes = () => {
    const { nodes } = this.props;
    return values(nodes).filter((node) => node.isRoot === true);
  };

  getChildNodes = (node) => {
    const { nodes } = this.props;
    if (!node.children) return [];
    return node.children.map((id) => nodes[id]);
  };

  onToggle = (node) => {
    this.props.onToggle({ nodeId: node.id });
  };

  render() {
    const rootNodes = this.getRootNodes();
    const { onAdd, onEdit, onDelete } = this.props;

    return (
      <div>
        {rootNodes.map((node) => (
          <TreeNode
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
            onAdd={onAdd}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}
