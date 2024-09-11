export default function Main(props) {
  const {data} = props
  return (
    <div className="imgContainer">
        <img src={data?.hdurl} alt="astronomy picture of the day" className="bgImage"/>
    </div>
  )
}
