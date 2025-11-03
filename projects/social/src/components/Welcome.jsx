const Welcome = ({getposts}) => {
  return <>
  <h1>No Posts to display</h1>
  <button type="button"  onClick={getposts} className="btn btn-primary" >fetch posts</button>

  </>

}
export default Welcome; 

