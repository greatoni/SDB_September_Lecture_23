function Footer() {
    const Year = new Date().getFullYear();
    return (
        <header>
            <h6> Copyright: {Year}</h6>
        </header>
    )
}

export default Footer;