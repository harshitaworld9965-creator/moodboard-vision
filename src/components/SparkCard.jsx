function SparkCard({ type, title, description, colors}) {
    return (
        <article className="spark-card">
            <div className="card-top">
                <span className="spark-type">{type}</span>
                <span className="spark-icon">✦</span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>
            {colors && (
                <div className="color-preview">
                    {colors.map((color) => (
                        <span
                        key={color}
                        style={{background: color}}
                        ></span>
                    ))}
                </div>
            )}
        </article>
    )
}
export default SparkCard;