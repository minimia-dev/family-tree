function toggleNodeOpen(context, { nodeId }) {
    let treeData = context.state.treeData;
    let isOpen = treeData[nodeId].isOpen;

    treeData[nodeId].isOpen = !isOpen;

    context.setState({ treeData: { ...treeData } });
}

export default toggleNodeOpen;
