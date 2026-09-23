export default function SectionTitle({ index, eyebrow, title }) {
  return (
    <div className="section-title reveal">
      <span className="eyebrow mono">
        <span className="accent">{index}.</span> {eyebrow}
      </span>
      <h2>{title}</h2>
    </div>
  )
}
