const randomRange = (min, max) => {
    const numero_r = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numero_r;
}

export default randomRange;