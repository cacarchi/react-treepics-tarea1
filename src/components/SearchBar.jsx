import PropTypes from 'prop-types';
function SearchBar ({value, onSearch}){
    console.log(value);
    return (
        <div className="search mt-4 mb-4 ml-0 mr-0">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="text" className="form-control fs-2" placeholder="Search by user" value={value} onChange={e=> onSearch(e.target.value)}/>
            </form>
        </div>
    );
}
SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
  }
export default SearchBar;