function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

function Profile({ name, profession, awards, discovery, imageUrl }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageUrl)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: 4 </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        discovery="polonium (chemical element)"
        imageUrl="szV5sdG"
      />
      <Profile
        name="Katsuko Saruhashi"
        profession="geochemist"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovery="a method for measuring carbon dioxide in seawater"
        imageUrl="YfeOqp2"
      />
    </div>
  );
}
