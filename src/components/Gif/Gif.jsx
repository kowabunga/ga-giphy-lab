export default function Gif({ gifData }) {
  return (
    <div>
      <img src={gifData.images.original.url} alt={gifData.title} />
    </div>
  );
}
