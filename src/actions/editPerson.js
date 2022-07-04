function addPerson(context, { name, nodeId }) {
    let treeData = context.state.treeData;

    treeData[nodeId].name = name || 'no name';

    context.setState({ treeData: { ...treeData } });
}

export default addPerson;
