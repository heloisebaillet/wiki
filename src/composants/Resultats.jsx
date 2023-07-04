function Resultats(props) {
  return (
    <div className="displayresultats">
      <li>
        <a href={props.lien} target="_blank">
          {props.lien}
        </a>
      </li>
    </div>
  );
}

export default Resultats;
