export interface DragDropItemModel {
  itemId: number;
  itemText: string;
  isDropped: boolean;
}

export const dndItems: DragDropItemModel[] = [
  { itemId: 1, itemText: 'Text 1', isDropped: false },
  { itemId: 2, itemText: 'Text 2', isDropped: false },
  { itemId: 3, itemText: 'Text 3', isDropped: false },
  { itemId: 4, itemText: 'Text 4', isDropped: false },
  { itemId: 5, itemText: 'Text 5', isDropped: false },
  { itemId: 6, itemText: 'Text 6', isDropped: false },
  { itemId: 7, itemText: 'Text 7', isDropped: false },
  { itemId: 8, itemText: 'Text 8', isDropped: false }
];