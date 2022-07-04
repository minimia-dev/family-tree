function addPerson(context, { name, parentNodeId }) {
    let treeData = context.state.treeData;
    let nextId = 0;

    nextId = Object.keys(treeData).reduce(
        (prev, key) => Math.max(prev, key),
        nextId
    );
    nextId = `${++nextId}`;

    let newNode = {
        id: nextId,
        name: name || 'new person',
        children: [],
    };

    treeData[parentNodeId].children.push(nextId);
    treeData[parentNodeId].isOpen = true;

    context.setState({ treeData: { ...treeData, [nextId]: newNode } });
}

export default addPerson;
