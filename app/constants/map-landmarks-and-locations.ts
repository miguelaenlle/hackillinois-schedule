export interface Point {
    x: number;
    y: number;
}

/** 
 * Represents a structure's location on the map, e.g. a building or statue.
 * For now, they are purely aesthetic.
 */
export interface StructureLocation extends Point {
    filename: string;
    width: number; 
    height: number;
}

/** 
 * Represents a point on the map representing an event. 
 * Landmarks fall on the trail, which is part of the map SVG.
 */
export interface Landmark extends Point {
    closestLocationIndex: number;
}

export const LANDMARKS: Landmark[] = [
  { x:  60, y: 115 , closestLocationIndex: -1},
  { x:  89, y: 97, closestLocationIndex: -1 },
  { x: 130, y: 83, closestLocationIndex: -1 },
  { x: 170, y: 84, closestLocationIndex: -1 },
  { x: 205, y: 100, closestLocationIndex: 0 },
  { x: 210, y: 125, closestLocationIndex: 0 },

  { x: 200, y: 150, closestLocationIndex: 1 },

  { x: 179, y: 180, closestLocationIndex: 2 },
  { x: 165, y: 205, closestLocationIndex: 2 },

  { x: 165, y: 235, closestLocationIndex: 3 },
  { x: 195, y: 245, closestLocationIndex: 3 },
  { x: 224, y: 240, closestLocationIndex: 3 },
  { x: 250, y: 235, closestLocationIndex: 4 },
  { x: 285, y: 230, closestLocationIndex: 5 },
];

export const LOCATIONS: StructureLocation[] = [
    { x: 225, y: 98, filename: 'columns-1.svg', width: 32, height: 32 },
    { x:  223, y: 148, filename: 'house.svg', width: 40, height: 40 },
    { x: 115, y: 175, filename: 'large-building.svg',   width: 80, height: 40 },
    { x: 198, y: 220, filename: 'medium-building.svg', width: 40, height: 40 },
    { x: 257, y: 261, filename: 'columns-2.svg', width: 32, height: 32 },
    { x: 287, y: 265, filename: 'statue.svg', width: 40, height: 40 },
];

export const MAP_SVG_WIDTH  = 380;
export const MAP_SVG_HEIGHT = 342;