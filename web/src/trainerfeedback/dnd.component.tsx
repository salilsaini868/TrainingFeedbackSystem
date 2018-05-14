import { Component } from 'react';
import * as React from 'react';
import { DragDropItemModel, dndItems } from 'api/model/dragdropitem.model';

// Add require to import the dnd feature
var dragDrop = require('react-drag-and-drop');
let Draggable = dragDrop.Draggable;
let Droppable = dragDrop.Droppable;

export interface DnDState {
  draggableItems: DragDropItemModel[];
  hovering: boolean;
}

class Dnd extends Component<any, DnDState> {

  constructor(props: any) {
    super(props);
    this.state = {
      draggableItems: dndItems,
      hovering: false
    };
  }
  render() {
    // tslint:disable-next-line:no-any
    let draggable = this.state.draggableItems.filter(t => !t.isDropped).map((item: any, index: any) => {
      return (
        <li key={'drag_' + item.itemId}>
          <Draggable enabled="true" type="dnd" data={item.itemId}>{item.itemText}</Draggable>
        </li>
      );
    });

    // tslint:disable-next-line:no-any
    let droppable = this.state.draggableItems.filter(t => t.isDropped).map((item: any, index: any) => {
      return (
        <div key={'drop_' + item.itemId} style={{ textAlign: 'center', lineHeight: '30px' }}>{item.itemText}</div>
      );
    });
    let droppableStyle = {
      height: '200px',
      backgroundColor: ''
    };
    if (this.state.hovering) {
      droppableStyle.backgroundColor = 'pink';
    }
    return (
      <div>
        <ul>{draggable}</ul>
        <div style={{ border: '1px solid red', width: '200px', height: '200px', position: 'relative' }}>
          <span style={{ position: 'absolute', float: 'left' }}>Drop here...</span>
          <Droppable
            types={['dnd']}
            style={droppableStyle}
            onDrop={this.onDrop.bind(this)}
            onDragEnter={this.onDragEnter.bind(this)}
            onDragLeave={this.onDragLeave.bind(this)}>
            {droppable}
          </Droppable>
        </div>
      </div>
    );
  }

  onDragEnter() {
    this.setState({ hovering: true });

  }
  onDragLeave() {
    // setTimeout(() => {
    //   this.setState({ hovering: false });
    // }, 2500);
  }

  onDrop(e: any) { 
    let item = this.state.draggableItems.find(t => t.itemId === +e.dnd);
    if (item) {
      item.isDropped = true;
    }
    // setTimeout(() => {
    this.setState({ hovering: false });
    // }, 1500);
  }
}

export default Dnd;