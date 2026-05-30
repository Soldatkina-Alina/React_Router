function JokeResult ({ joke }) {
if (!joke) {
return null;
}

return (
<div>
    <h2>Веселые анекдоты</h2>
    <p>{joke.data.setup + ' ' + joke.data.punchline}</p>
</div>
);

}
export default JokeResult;