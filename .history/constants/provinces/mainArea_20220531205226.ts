import { MapAreas } from "react-img-mapper";

const mainAreaCoords: Array<MapAreas> = [
  {
    shape: "poly",
    coords: [
      113, 21, 114, 23, 119, 29, 122, 40, 118, 41, 117, 39, 115, 39, 115, 41,
      118, 43, 121, 42, 126, 44, 126, 41, 129, 37, 130, 39, 131, 36, 131, 33,
      136, 32, 139, 28, 145, 27, 144, 23, 141, 19, 135, 21, 126, 18,
    ],
    active: true,
    id: "NorthDelta",
  },
  {
    shape: "poly",
    coords: [
      145, 22, 146, 27, 139, 29, 136, 31, 133, 33, 132, 36, 130, 39, 132, 42,
      136, 44, 140, 42, 142, 45, 141, 67, 155, 64, 154, 60, 150, 56, 153, 48,
      156, 53, 157, 56, 159, 60, 166, 67, 166, 75, 174, 81, 185, 90, 179, 86,
      184, 89, 189, 85, 188, 81, 193, 72, 195, 62, 198, 57, 185, 24, 176, 27,
      171, 27, 167, 26, 155, 28,
    ],
    active: true,
    id: "Sina",
  },
  {
    shape: "poly",
    coords: [
      112, 20, 109, 24, 107, 23, 88, 33, 82, 29, 78, 28, 67, 27, 65, 25, 61, 26,
      57, 25, 55, 22, 52, 22, 49, 21, 28, 17, 20, 20, 15, 19, 14, 17, 8, 23, 11,
      33, 11, 35, 10, 39, 6, 44, 8, 49, 8, 52, 9, 55, 8, 57, 11, 62, 11, 92, 55,
      91, 64, 75, 83, 71, 98, 57, 112, 50, 119, 44, 115, 42, 115, 39, 118, 39,
      118, 40, 121, 39, 120, 29, 112, 22,
    ],
    active: true,
    id: "Alex",
  },
  {
    shape: "poly",
    coords: [
      142, 67, 143, 52, 141, 43, 140, 42, 137, 45, 133, 43, 132, 43, 129, 40,
      129, 38, 126, 41, 127, 44, 124, 45, 122, 42, 114, 48, 112, 51, 102, 56,
      99, 57, 92, 64, 82, 72, 64, 76, 56, 92, 77, 92, 82, 88, 94, 83, 98, 80,
      101, 74, 103, 66, 111, 59, 120, 53, 125, 53, 127, 58, 132, 64, 132, 65,
    ],
    active: true,
    id: "GreatCairo",
  },
  {
    shape: "poly",
    coords: [
      136, 93, 131, 93, 126, 93, 122, 94, 121, 94, 120, 94, 119, 94, 115, 94,
      109, 94, 100, 93, 80, 92, 77, 93, 79, 91, 83, 88, 92, 85, 98, 80, 101, 75,
      103, 66, 110, 60, 120, 54, 125, 53, 126, 57, 129, 59, 129, 64, 142, 68,
      143, 68, 139, 71, 140, 75, 139, 77, 141, 81, 147, 80, 153, 83, 154, 88,
      146, 90,
    ],
    active: true,
    id: "NorthSaaid",
  },
  {
    shape: "poly",
    coords: [
      124, 199, 137, 175, 147, 156, 155, 140, 153, 138, 151, 131, 155, 129, 156,
      126, 157, 124, 158, 123, 156, 122, 151, 123, 148, 125, 143, 122, 130, 109,
      133, 106, 134, 108, 136, 108, 136, 108, 141, 105, 143, 106, 146, 106, 153,
      101, 155, 98, 156, 93, 152, 83, 147, 80, 142, 81, 139, 76, 139, 75, 139,
      73, 141, 69, 143, 68, 145, 67, 152, 66, 154, 65, 155, 65, 156, 66, 156,
      67, 155, 68, 156, 70, 157, 71, 158, 71, 159, 75, 161, 76, 162, 77, 163,
      78, 164, 79, 165, 80, 166, 82, 169, 85, 170, 86, 171, 86, 174, 90, 172,
      90, 172, 90, 172, 91, 172, 92, 172, 93, 173, 95, 175, 97, 176, 99, 178,
      101, 178, 102, 178, 104, 180, 104, 180, 106, 181, 107, 181, 108, 180, 112,
      182, 113, 183, 116, 185, 118, 187, 124, 189, 125, 189, 127, 190, 127, 191,
      129, 195, 135, 198, 142, 200, 145, 201, 148, 202, 149, 203, 152, 203, 153,
      204, 154, 208, 156, 210, 160, 211, 161, 213, 162, 215, 162, 214, 163, 213,
      163, 210, 163, 209, 163, 209, 165, 209, 168, 209, 170, 209, 172, 210, 173,
      211, 176, 213, 180, 213, 182, 217, 186, 218, 187, 222, 187, 224, 188, 225,
      191, 227, 191, 228, 193, 230, 194, 233, 197, 233, 200,
    ],
    active: true,
    id: "SouthSaaid",
  },
  {
    shape: "poly",
    coords: [
      11, 92, 11, 165, 11, 199, 103, 200, 124, 199, 142, 166, 156, 140, 153,
      139, 152, 134, 151, 131, 154, 129, 155, 128, 157, 124, 158, 123, 157, 122,
      151, 124, 149, 125, 146, 124, 139, 118, 130, 108, 132, 106, 135, 108, 136,
      108, 138, 106, 141, 105, 147, 106, 154, 101, 156, 98, 156, 93, 154, 89,
      153, 89, 152, 89, 151, 88, 149, 90, 146, 90, 137, 92, 130, 93, 122, 95,
      109, 94, 72, 92,
    ],
    active: true,
    id:"Assuit"
  },
];

export default mainAreaCoords;
