/*
  This is the entry point. Export a react component here.
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Preview from './components/Preview'
import * as addPreviews from './components/PresenterActions'

class Presenter extends Component {

  getPresentationList() {
    console.log(this, 'from the outside');
    const addPreviews = this.props.addPreviews;

    // query for all presentations that are in user's google drive
    return GoogleApi.get('drive/v2/files?q=mimeType="application/vnd.google-apps.presentation"', {}, function (err, result) {
      if (err) console.error(err);
      // Map an array of preview objects with specific properties
      var previews = result.items.map((doc) => {
        return {
          link: doc.embedLink.replace('link', 'embed'),
          title: doc.title,
          thumbnail: doc.thumbnailLink,
          gid: doc.id
        };
      });

      // Create an action with previews to update store
      addPreviews(previews);
    });
  }

  renderPreviews() {
    let setPres = this.props.setPresentation

    return this.props.previews.map((preview) => {
      return (
        <Preview
          setPresentation={setPres}
          key={preview.gid}
          data={preview} />
      )
    })
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>OMG PREVIEWS PLZ</h1>
          <button onClick={this.getPresentationList.bind(this)}>Bjarke</button>

          <ul className="presentation_list">
            {this.renderPreviews()}
          </ul>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // TODO: research the right way to get state props
    // TODO: FIX PREVIEWS.PREVIEWS
    previews: state.previews
  }
}
//
// function mapDispatchToProps() {

// }
export default connect(mapStateToProps, addPreviews)(Presenter)
