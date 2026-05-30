function FactResult ({ facts }) {
if (!facts || facts.length === 0) {
return null;
}

return (
<div>
    <h2>Веселые факты о котах</h2>
    <ul>
        {facts.map((item) => (
            <li key={item.fact}>{item.fact}</li>
        ))}
    </ul>
</div>
);

}
export default FactResult;