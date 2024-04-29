const Stack = (props) => {
  let {id, name, image} = props;
  return (
    <>
      <div className="hover:drop-shadow-2xl hover:shadow-md hover:shadow-neutral-500 hover:transition transition delay-100 ease-in-out duration-1000 hover:bg-blue-900 hover:text-white flex-col p-2" key={id ? id : name}>
    <div className="pb-3">
      <a href="#" className="">
        <img className="h-20" src={image}/>
      </a>
      <div>
        <p className="text-center berkshire-swash text-xs">{name}</p>
      </div>
      </div>
    </div>
    </>
    )
}
export default Stack;