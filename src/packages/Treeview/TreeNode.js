import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import IconAccountCircle from "@material-ui/icons/AccountCircle";
import IconAccountBox from "@material-ui/icons/AccountBox";
import IconChevronRight from "@material-ui/icons/ChevronRight";
import IconChevronDown from "@material-ui/icons/ExpandMore";

import TreeNodeWrapper from "./TreeNodeWrapper";
import ButtonWithMenu from "./ButtonWithMenu";

import styles from "./TreeNode.styles";

class TreeNode extends Component {
  static defaultProps = {
    level: 0
  };

  render() {
    const {
      classes,
      node,
      getChildNodes,
      level,
      onToggle,
      onNodeSelect,
      onAdd,
      onEdit,
      onDelete
    } = this.props;
    const isNoChildren = 0;

    return (
      <React.Fragment>
        <TreeNodeWrapper level={level} isEnd={isNoChildren}>
          <div
            className={classes.treeNode}
            onClick={() => (isNoChildren ? null : onToggle(node))}
          >
            <div className={classes.nodeIcon}>
              {!isNoChildren &&
                (node.isOpen ? <IconChevronDown /> : <IconChevronRight />)}
            </div>

            <div className={classes.nodeIcon}>
              {node.isOpen === true && <IconAccountBox />}
              {!node.isOpen && <IconAccountCircle />}
            </div>

            <span role="button" onClick={() => onNodeSelect(node)}>
              {node.name}
            </span>

            <div className={classes.controlsWrapper}>
              <ButtonWithMenu
                nodeId={node.id}
                noDelete={node.isRoot || !isNoChildren}
                onAdd={onAdd}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </div>
          </div>
        </TreeNodeWrapper>

        {node.isOpen &&
          getChildNodes(node).map((childNode) => (
            <TreeNode
              {...this.props}
              node={childNode}
              level={level + 1}
              onAdd={onAdd}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TreeNode);
