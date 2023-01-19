export default function Gif({ gifData, random }) {
  console.log(gifData);
  return (
    <div>
      {random ? (
        <img src={gifData.data.images.original.url} alt={gifData.data.title} />
      ) : (
        <img
          src={gifData.data[0].images.original.url}
          alt={gifData.data[0].title}
        />
      )}
    </div>
  );
}
