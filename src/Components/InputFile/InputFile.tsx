import React from 'react';

export class InputFile extends React.Component {
  fileInput = React.createRef<HTMLInputElement>();

  render() {
    return (
      <>
        <input type="file" ref={this.fileInput} />
      </>
    );
  }
}
