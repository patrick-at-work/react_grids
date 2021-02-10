import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import DensifyGridContainer from './densify-grid-container';

let selectGrid = "1";
//hard coded dummy data
const columns = [
  { key: 'id1', name:'column1'}, 
{ key: 'id2', name:'column2'}, 
{ key: 'id3', name:'column3'}, 
{ key: 'id4', name:'column4'}, 
{ key: 'id5', name:'column5'}, 
{ key: 'id6', name:'column6'}, 
{ key: 'id7', name:'column7'}, 
{ key: 'id8', name:'column8'}, 
{ key: 'id9', name:'column9'}, 
{ key: 'id10', name:'column10'}, 
{ key: 'id11', name:'column11'}, 
{ key: 'id12', name:'column12'}, 
{ key: 'id13', name:'column13'}, 
{ key: 'id14', name:'column14'}, 
{ key: 'id15', name:'column15'}, 
{ key: 'id16', name:'column16'}, 
{ key: 'id17', name:'column17'}, 
{ key: 'id18', name:'column18'}, 
{ key: 'id19', name:'column19'}, 
{ key: 'id20', name:'column20'}
];

const rows = [
  { id1:'row1', 	id2: 'row1', 	id3: 'row1', 	id4: 'row1', 	id5: 'row1', 	id6: 'row1', 	id7: 'row1', 	id8: 'row1', 	id9: 'row1', 	id10: 'row1', 	id11: 'row1', 	id12: 'row1', 	id13: 'row1', 	id14: 'row1', 	id15: 'row1', 	id16: 'row1', 	id17: 'row1', 	id18: 'row1', 	id19: 'row1', 	id20: 'row1',},
  { id1:'row2', 	id2: 'row2', 	id3: 'row2', 	id4: 'row2', 	id5: 'row2', 	id6: 'row2', 	id7: 'row2', 	id8: 'row2', 	id9: 'row2', 	id10: 'row2', 	id11: 'row2', 	id12: 'row2', 	id13: 'row2', 	id14: 'row2', 	id15: 'row2', 	id16: 'row2', 	id17: 'row2', 	id18: 'row2', 	id19: 'row2', 	id20: 'row2',},
  { id1:'row3', 	id2: 'row3', 	id3: 'row3', 	id4: 'row3', 	id5: 'row3', 	id6: 'row3', 	id7: 'row3', 	id8: 'row3', 	id9: 'row3', 	id10: 'row3', 	id11: 'row3', 	id12: 'row3', 	id13: 'row3', 	id14: 'row3', 	id15: 'row3', 	id16: 'row3', 	id17: 'row3', 	id18: 'row3', 	id19: 'row3', 	id20: 'row3',},
  { id1:'row4', 	id2: 'row4', 	id3: 'row4', 	id4: 'row4', 	id5: 'row4', 	id6: 'row4', 	id7: 'row4', 	id8: 'row4', 	id9: 'row4', 	id10: 'row4', 	id11: 'row4', 	id12: 'row4', 	id13: 'row4', 	id14: 'row4', 	id15: 'row4', 	id16: 'row4', 	id17: 'row4', 	id18: 'row4', 	id19: 'row4', 	id20: 'row4',},
  { id1:'row5', 	id2: 'row5', 	id3: 'row5', 	id4: 'row5', 	id5: 'row5', 	id6: 'row5', 	id7: 'row5', 	id8: 'row5', 	id9: 'row5', 	id10: 'row5', 	id11: 'row5', 	id12: 'row5', 	id13: 'row5', 	id14: 'row5', 	id15: 'row5', 	id16: 'row5', 	id17: 'row5', 	id18: 'row5', 	id19: 'row5', 	id20: 'row5',},
  { id1:'row6', 	id2: 'row6', 	id3: 'row6', 	id4: 'row6', 	id5: 'row6', 	id6: 'row6', 	id7: 'row6', 	id8: 'row6', 	id9: 'row6', 	id10: 'row6', 	id11: 'row6', 	id12: 'row6', 	id13: 'row6', 	id14: 'row6', 	id15: 'row6', 	id16: 'row6', 	id17: 'row6', 	id18: 'row6', 	id19: 'row6', 	id20: 'row6',},
  { id1:'row7', 	id2: 'row7', 	id3: 'row7', 	id4: 'row7', 	id5: 'row7', 	id6: 'row7', 	id7: 'row7', 	id8: 'row7', 	id9: 'row7', 	id10: 'row7', 	id11: 'row7', 	id12: 'row7', 	id13: 'row7', 	id14: 'row7', 	id15: 'row7', 	id16: 'row7', 	id17: 'row7', 	id18: 'row7', 	id19: 'row7', 	id20: 'row7',},
  { id1:'row8', 	id2: 'row8', 	id3: 'row8', 	id4: 'row8', 	id5: 'row8', 	id6: 'row8', 	id7: 'row8', 	id8: 'row8', 	id9: 'row8', 	id10: 'row8', 	id11: 'row8', 	id12: 'row8', 	id13: 'row8', 	id14: 'row8', 	id15: 'row8', 	id16: 'row8', 	id17: 'row8', 	id18: 'row8', 	id19: 'row8', 	id20: 'row8',},
  { id1:'row9', 	id2: 'row9', 	id3: 'row9', 	id4: 'row9', 	id5: 'row9', 	id6: 'row9', 	id7: 'row9', 	id8: 'row9', 	id9: 'row9', 	id10: 'row9', 	id11: 'row9', 	id12: 'row9', 	id13: 'row9', 	id14: 'row9', 	id15: 'row9', 	id16: 'row9', 	id17: 'row9', 	id18: 'row9', 	id19: 'row9', 	id20: 'row9',},
  { id1:'row10', 	id2: 'row10', 	id3: 'row10', 	id4: 'row10', 	id5: 'row10', 	id6: 'row10', 	id7: 'row10', 	id8: 'row10', 	id9: 'row10', 	id10: 'row10', 	id11: 'row10', 	id12: 'row10', 	id13: 'row10', 	id14: 'row10', 	id15: 'row10', 	id16: 'row10', 	id17: 'row10', 	id18: 'row10', 	id19: 'row10', 	id20: 'row10',},
  { id1:'row11', 	id2: 'row11', 	id3: 'row11', 	id4: 'row11', 	id5: 'row11', 	id6: 'row11', 	id7: 'row11', 	id8: 'row11', 	id9: 'row11', 	id10: 'row11', 	id11: 'row11', 	id12: 'row11', 	id13: 'row11', 	id14: 'row11', 	id15: 'row11', 	id16: 'row11', 	id17: 'row11', 	id18: 'row11', 	id19: 'row11', 	id20: 'row11',},
  { id1:'row12', 	id2: 'row12', 	id3: 'row12', 	id4: 'row12', 	id5: 'row12', 	id6: 'row12', 	id7: 'row12', 	id8: 'row12', 	id9: 'row12', 	id10: 'row12', 	id11: 'row12', 	id12: 'row12', 	id13: 'row12', 	id14: 'row12', 	id15: 'row12', 	id16: 'row12', 	id17: 'row12', 	id18: 'row12', 	id19: 'row12', 	id20: 'row12',},
  { id1:'row13', 	id2: 'row13', 	id3: 'row13', 	id4: 'row13', 	id5: 'row13', 	id6: 'row13', 	id7: 'row13', 	id8: 'row13', 	id9: 'row13', 	id10: 'row13', 	id11: 'row13', 	id12: 'row13', 	id13: 'row13', 	id14: 'row13', 	id15: 'row13', 	id16: 'row13', 	id17: 'row13', 	id18: 'row13', 	id19: 'row13', 	id20: 'row13',},
  { id1:'row14', 	id2: 'row14', 	id3: 'row14', 	id4: 'row14', 	id5: 'row14', 	id6: 'row14', 	id7: 'row14', 	id8: 'row14', 	id9: 'row14', 	id10: 'row14', 	id11: 'row14', 	id12: 'row14', 	id13: 'row14', 	id14: 'row14', 	id15: 'row14', 	id16: 'row14', 	id17: 'row14', 	id18: 'row14', 	id19: 'row14', 	id20: 'row14',},
  { id1:'row15', 	id2: 'row15', 	id3: 'row15', 	id4: 'row15', 	id5: 'row15', 	id6: 'row15', 	id7: 'row15', 	id8: 'row15', 	id9: 'row15', 	id10: 'row15', 	id11: 'row15', 	id12: 'row15', 	id13: 'row15', 	id14: 'row15', 	id15: 'row15', 	id16: 'row15', 	id17: 'row15', 	id18: 'row15', 	id19: 'row15', 	id20: 'row15',},
  { id1:'row16', 	id2: 'row16', 	id3: 'row16', 	id4: 'row16', 	id5: 'row16', 	id6: 'row16', 	id7: 'row16', 	id8: 'row16', 	id9: 'row16', 	id10: 'row16', 	id11: 'row16', 	id12: 'row16', 	id13: 'row16', 	id14: 'row16', 	id15: 'row16', 	id16: 'row16', 	id17: 'row16', 	id18: 'row16', 	id19: 'row16', 	id20: 'row16',},
  { id1:'row17', 	id2: 'row17', 	id3: 'row17', 	id4: 'row17', 	id5: 'row17', 	id6: 'row17', 	id7: 'row17', 	id8: 'row17', 	id9: 'row17', 	id10: 'row17', 	id11: 'row17', 	id12: 'row17', 	id13: 'row17', 	id14: 'row17', 	id15: 'row17', 	id16: 'row17', 	id17: 'row17', 	id18: 'row17', 	id19: 'row17', 	id20: 'row17',},
  { id1:'row18', 	id2: 'row18', 	id3: 'row18', 	id4: 'row18', 	id5: 'row18', 	id6: 'row18', 	id7: 'row18', 	id8: 'row18', 	id9: 'row18', 	id10: 'row18', 	id11: 'row18', 	id12: 'row18', 	id13: 'row18', 	id14: 'row18', 	id15: 'row18', 	id16: 'row18', 	id17: 'row18', 	id18: 'row18', 	id19: 'row18', 	id20: 'row18',},
  { id1:'row19', 	id2: 'row19', 	id3: 'row19', 	id4: 'row19', 	id5: 'row19', 	id6: 'row19', 	id7: 'row19', 	id8: 'row19', 	id9: 'row19', 	id10: 'row19', 	id11: 'row19', 	id12: 'row19', 	id13: 'row19', 	id14: 'row19', 	id15: 'row19', 	id16: 'row19', 	id17: 'row19', 	id18: 'row19', 	id19: 'row19', 	id20: 'row19',},
  { id1:'row20', 	id2: 'row20', 	id3: 'row20', 	id4: 'row20', 	id5: 'row20', 	id6: 'row20', 	id7: 'row20', 	id8: 'row20', 	id9: 'row20', 	id10: 'row20', 	id11: 'row20', 	id12: 'row20', 	id13: 'row20', 	id14: 'row20', 	id15: 'row20', 	id16: 'row20', 	id17: 'row20', 	id18: 'row20', 	id19: 'row20', 	id20: 'row20',},
  { id1:'row21', 	id2: 'row21', 	id3: 'row21', 	id4: 'row21', 	id5: 'row21', 	id6: 'row21', 	id7: 'row21', 	id8: 'row21', 	id9: 'row21', 	id10: 'row21', 	id11: 'row21', 	id12: 'row21', 	id13: 'row21', 	id14: 'row21', 	id15: 'row21', 	id16: 'row21', 	id17: 'row21', 	id18: 'row21', 	id19: 'row21', 	id20: 'row21',},
  { id1:'row22', 	id2: 'row22', 	id3: 'row22', 	id4: 'row22', 	id5: 'row22', 	id6: 'row22', 	id7: 'row22', 	id8: 'row22', 	id9: 'row22', 	id10: 'row22', 	id11: 'row22', 	id12: 'row22', 	id13: 'row22', 	id14: 'row22', 	id15: 'row22', 	id16: 'row22', 	id17: 'row22', 	id18: 'row22', 	id19: 'row22', 	id20: 'row22',},
  { id1:'row23', 	id2: 'row23', 	id3: 'row23', 	id4: 'row23', 	id5: 'row23', 	id6: 'row23', 	id7: 'row23', 	id8: 'row23', 	id9: 'row23', 	id10: 'row23', 	id11: 'row23', 	id12: 'row23', 	id13: 'row23', 	id14: 'row23', 	id15: 'row23', 	id16: 'row23', 	id17: 'row23', 	id18: 'row23', 	id19: 'row23', 	id20: 'row23',},
  { id1:'row24', 	id2: 'row24', 	id3: 'row24', 	id4: 'row24', 	id5: 'row24', 	id6: 'row24', 	id7: 'row24', 	id8: 'row24', 	id9: 'row24', 	id10: 'row24', 	id11: 'row24', 	id12: 'row24', 	id13: 'row24', 	id14: 'row24', 	id15: 'row24', 	id16: 'row24', 	id17: 'row24', 	id18: 'row24', 	id19: 'row24', 	id20: 'row24',},
  { id1:'row25', 	id2: 'row25', 	id3: 'row25', 	id4: 'row25', 	id5: 'row25', 	id6: 'row25', 	id7: 'row25', 	id8: 'row25', 	id9: 'row25', 	id10: 'row25', 	id11: 'row25', 	id12: 'row25', 	id13: 'row25', 	id14: 'row25', 	id15: 'row25', 	id16: 'row25', 	id17: 'row25', 	id18: 'row25', 	id19: 'row25', 	id20: 'row25',},
  { id1:'row26', 	id2: 'row26', 	id3: 'row26', 	id4: 'row26', 	id5: 'row26', 	id6: 'row26', 	id7: 'row26', 	id8: 'row26', 	id9: 'row26', 	id10: 'row26', 	id11: 'row26', 	id12: 'row26', 	id13: 'row26', 	id14: 'row26', 	id15: 'row26', 	id16: 'row26', 	id17: 'row26', 	id18: 'row26', 	id19: 'row26', 	id20: 'row26',},
  { id1:'row27', 	id2: 'row27', 	id3: 'row27', 	id4: 'row27', 	id5: 'row27', 	id6: 'row27', 	id7: 'row27', 	id8: 'row27', 	id9: 'row27', 	id10: 'row27', 	id11: 'row27', 	id12: 'row27', 	id13: 'row27', 	id14: 'row27', 	id15: 'row27', 	id16: 'row27', 	id17: 'row27', 	id18: 'row27', 	id19: 'row27', 	id20: 'row27',},
  { id1:'row28', 	id2: 'row28', 	id3: 'row28', 	id4: 'row28', 	id5: 'row28', 	id6: 'row28', 	id7: 'row28', 	id8: 'row28', 	id9: 'row28', 	id10: 'row28', 	id11: 'row28', 	id12: 'row28', 	id13: 'row28', 	id14: 'row28', 	id15: 'row28', 	id16: 'row28', 	id17: 'row28', 	id18: 'row28', 	id19: 'row28', 	id20: 'row28',},
  { id1:'row29', 	id2: 'row29', 	id3: 'row29', 	id4: 'row29', 	id5: 'row29', 	id6: 'row29', 	id7: 'row29', 	id8: 'row29', 	id9: 'row29', 	id10: 'row29', 	id11: 'row29', 	id12: 'row29', 	id13: 'row29', 	id14: 'row29', 	id15: 'row29', 	id16: 'row29', 	id17: 'row29', 	id18: 'row29', 	id19: 'row29', 	id20: 'row29',},
  { id1:'row30', 	id2: 'row30', 	id3: 'row30', 	id4: 'row30', 	id5: 'row30', 	id6: 'row30', 	id7: 'row30', 	id8: 'row30', 	id9: 'row30', 	id10: 'row30', 	id11: 'row30', 	id12: 'row30', 	id13: 'row30', 	id14: 'row30', 	id15: 'row30', 	id16: 'row30', 	id17: 'row30', 	id18: 'row30', 	id19: 'row30', 	id20: 'row30',},
  { id1:'row31', 	id2: 'row31', 	id3: 'row31', 	id4: 'row31', 	id5: 'row31', 	id6: 'row31', 	id7: 'row31', 	id8: 'row31', 	id9: 'row31', 	id10: 'row31', 	id11: 'row31', 	id12: 'row31', 	id13: 'row31', 	id14: 'row31', 	id15: 'row31', 	id16: 'row31', 	id17: 'row31', 	id18: 'row31', 	id19: 'row31', 	id20: 'row31',},
  { id1:'row32', 	id2: 'row32', 	id3: 'row32', 	id4: 'row32', 	id5: 'row32', 	id6: 'row32', 	id7: 'row32', 	id8: 'row32', 	id9: 'row32', 	id10: 'row32', 	id11: 'row32', 	id12: 'row32', 	id13: 'row32', 	id14: 'row32', 	id15: 'row32', 	id16: 'row32', 	id17: 'row32', 	id18: 'row32', 	id19: 'row32', 	id20: 'row32',},
  { id1:'row33', 	id2: 'row33', 	id3: 'row33', 	id4: 'row33', 	id5: 'row33', 	id6: 'row33', 	id7: 'row33', 	id8: 'row33', 	id9: 'row33', 	id10: 'row33', 	id11: 'row33', 	id12: 'row33', 	id13: 'row33', 	id14: 'row33', 	id15: 'row33', 	id16: 'row33', 	id17: 'row33', 	id18: 'row33', 	id19: 'row33', 	id20: 'row33',}
 ];
function clickHandler(i) {
  alert("test:"+i);
  selectGrid=i;
}
ReactDOM.render(
  <div> 
    <DensifyGridContainer columns={columns} rows={rows} selection={selectGrid}/>
  </div>,
  document.getElementById('root')
);