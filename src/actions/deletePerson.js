const findIndex = (data, index) => data.findIndex((item) => item === index);

function deletePerson(context, { name, nodeId }) {
  let treeData = context.state.treeData;
  let key = Object.keys(treeData).find(
    (key) => findIndex(treeData[key].children, nodeId) !== -1
  );
  let index = findIndex(treeData[key].children, nodeId);

  treeData[key].children.splice(index, 1);
  if (treeData[key].children === 0) treeData[key].isOpen = false;

  delete treeData[nodeId];

  context.setState({ treeData: { ...treeData } });
}

export default deletePerson;
