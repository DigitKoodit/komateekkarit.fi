const bgColor = (exclusiveTo) => {
  switch (exclusiveTo) {
    case 'kone':
      return 'rgb(136 60 109)';
    case 'materiaali':
      return '#2c3d7d';
    default:
      return null;
  }
};

export default bgColor;