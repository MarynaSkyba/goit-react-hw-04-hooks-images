import {Component} from 'react';



export default class ImageGallery extends Component {
    state = {
        loading:false
    }

componentDidUpdate (prevProps, prevState) {
    if(prevProps.searchImage !== this.props.searchImage){
    this.setState({loading: true})
    fetch(`https://pixabay.com/api/?q=cat&page=1&key=22578117-98ddcf36fbc3d0da8c48aeee6&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
    .then(console.log)
    .finally(()=> this.setState({loading: false}))
    }
}

    render() {
        return (<div>
        {this.state.loading && <div>Загржаю..</div>}
        <ul className="ImageGallery">
            {this.props.searchImage}
</ul>
</div>)
        
    }
}