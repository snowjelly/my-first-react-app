function getImageUrl(person, size) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar({ person, size }) {
  let urlSize = "b";
  if (size < 90) urlSize = "s";
  return (
    <img
      className="avatar"
      src={getImageUrl(person, urlSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
}
