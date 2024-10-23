function Info(props) {
  return (
    <>
      <section>
        <p>
          {props.name}
          {props.age}
        </p>
      </section>
      <section>
        {props.admin}
      </section>
    </>
  );
}
export default Info;
