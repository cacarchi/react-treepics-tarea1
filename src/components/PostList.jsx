import Post from "./Post";

function PostList () {
    return (
        <div className="cards row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <Post name="@César" title="Card TreePic 1" description="This is a description of the card. TreePics 1" img="https://source.unsplash.com/random/800x800" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <Post name="@Raúl" title="Card TreePic 2" description="This is a description of the card. TreePics 2" img="https://source.unsplash.com/random/800x800" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <Post name="@Jefferson" title="Card TreePic 3" description="This is a description of the card. TreePics 3" img="https://source.unsplash.com/random/800x800" />
            </div>
        </div>
    );
}
export default PostList;