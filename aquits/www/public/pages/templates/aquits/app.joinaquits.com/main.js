
// get modal element
var modal = document.getElementById('');

// get modal btn element
var modalBtn = document.getElementById('modalBtn');

// get close element
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for  open click
modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', outsideClick);

//function open modal
function openModal(){
    modal.style.display ='block';

}

//function close modal
function closeModal(){
    modal.style.display ='none';

}

//function close modal
function outsideClick(e){

if(e.target==modal){
    modal.style.display ='none';    
   }
}



<div class="modal-content">
            
<div class="modal-header">
<button class="close white-x" data-dismiss="modal">
</button>
<div class="header-ratings">
<span>Weekly Lifestyle Inventory</span>
<div class="sub-title">June 10th 2019</div>
</div>
</div>
<form class="new_lifestyle_inventory" action="/lifestyle_inventories" accept-charset="UTF-8" data-remote="true" method="post">
<input name="utf8" value="✓" type="hidden">
<div class="modal-body">
<div id="modal-body-container">
<div data-page="0" id="modal-body-wrapper">
<div class="form-body centered" data-page-content="1">
<div class="modal-indicator">
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div id="questions">
<span>
<div class="fields">
<h3>Over the past week, how often has your living environment had a positive influence on your healing and recovery?</h3>
<div class="rating-box-wrapper mar-top30 mar-bot50">
<div class="rating-box">
<h1>0</h1>
</div>
</div>
<div class="mar-top20 mar-bot30" id="range-slider">

<input value="0" id="rating_1" name="lifestyle_inventory[lifestyle_submissions_attributes][0][rating]" tabindex="-1" readonly="" class="irs-hidden-input" type="text">
<input value="1" name="lifestyle_inventory[lifestyle_submissions_attributes][0][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_0_lifestyle_question_id" class="irs-hidden-input" type="hidden">
</div>
</div>
</span>
<span class="hidden">
<h2>Please answer the following about your environment over the past week:</h2>
<div class="modal-slide-inner">
<div class="survey-categories-header mar-top20">
<div class="left-side">

</div>
<div class="right-side">
<div class="survey-answer-text">Never</div>
<div class="survey-answer-text">Rarely</div>
<div class="survey-answer-text">Sometimes</div>
<div class="survey-answer-text">Frequently</div>
<div class="survey-answer-text">Almost Always</div>
</div>
</div>
<div class="fields">

</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week would you say your living spaces (at home/work) were clean and “in order”?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][2][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_rating_0" disabled="disabled" type="radio">
<input value="2" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][2][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_lifestyle_question_id_2" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][2][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_rating_6" disabled="disabled" type="radio">
<input value="2" name="lifestyle_inventory[lifestyle_submissions_attributes][2][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_lifestyle_question_id_2" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][2][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_rating_12" disabled="disabled" type="radio">
<input value="2" name="lifestyle_inventory[lifestyle_submissions_attributes][2][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_lifestyle_question_id_2" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][2][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_rating_18" disabled="disabled" type="radio">
<input value="2" name="lifestyle_inventory[lifestyle_submissions_attributes][2][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_lifestyle_question_id_2" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][2][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_rating_25" disabled="disabled" type="radio">
<input value="2" name="lifestyle_inventory[lifestyle_submissions_attributes][2][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_2_lifestyle_question_id_2" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week would you say you were exposed to bright or natural light, and good ventilation in your regular living environment?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][3][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_rating_0" disabled="disabled" type="radio">
<input value="3" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][3][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_lifestyle_question_id_3" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][3][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_rating_6" disabled="disabled" type="radio">
<input value="3" name="lifestyle_inventory[lifestyle_submissions_attributes][3][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_lifestyle_question_id_3" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][3][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_rating_12" disabled="disabled" type="radio">
<input value="3" name="lifestyle_inventory[lifestyle_submissions_attributes][3][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_lifestyle_question_id_3" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][3][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_rating_18" disabled="disabled" type="radio">
<input value="3" name="lifestyle_inventory[lifestyle_submissions_attributes][3][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_lifestyle_question_id_3" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][3][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_rating_25" disabled="disabled" type="radio">
<input value="3" name="lifestyle_inventory[lifestyle_submissions_attributes][3][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_3_lifestyle_question_id_3" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week would you say you were exposed to negative, triggering influences in your regular living environment?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][4][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_rating_25" disabled="disabled" type="radio">
<input value="4" name="lifestyle_inventory[lifestyle_submissions_attributes][4][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_lifestyle_question_id_4" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][4][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_rating_18" disabled="disabled" type="radio">
<input value="4" name="lifestyle_inventory[lifestyle_submissions_attributes][4][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_lifestyle_question_id_4" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][4][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_rating_12" disabled="disabled" type="radio">
<input value="4" name="lifestyle_inventory[lifestyle_submissions_attributes][4][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_lifestyle_question_id_4" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][4][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_rating_6" disabled="disabled" type="radio">
<input value="4" name="lifestyle_inventory[lifestyle_submissions_attributes][4][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_lifestyle_question_id_4" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][4][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_rating_0" disabled="disabled" type="radio">
<input value="4" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][4][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_4_lifestyle_question_id_4" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week would you say you were exposed to unhealthy chemicals in the air you breathe or other physical aspects of your regular living environment?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][5][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_rating_25" disabled="disabled" type="radio">
<input value="5" name="lifestyle_inventory[lifestyle_submissions_attributes][5][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_lifestyle_question_id_5" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][5][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_rating_18" disabled="disabled" type="radio">
<input value="5" name="lifestyle_inventory[lifestyle_submissions_attributes][5][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_lifestyle_question_id_5" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][5][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_rating_12" disabled="disabled" type="radio">
<input value="5" name="lifestyle_inventory[lifestyle_submissions_attributes][5][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_lifestyle_question_id_5" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][5][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_rating_6" disabled="disabled" type="radio">
<input value="5" name="lifestyle_inventory[lifestyle_submissions_attributes][5][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_lifestyle_question_id_5" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][5][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_rating_0" disabled="disabled" type="radio">
<input value="5" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][5][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_5_lifestyle_question_id_5" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
</div>
</span>
</div>
</div>
<div class="form-body-subheader mar-bot10">
<div class="switch_question" data-q-type="xtra">Not sure exactly? Answer a few questions to find out.</div>
</div>
<div class="mar-top20 clearfix mar-bot10">
<div class="button btn-blue pull-right next">Next</div>
</div>
</div>
<div class="form-body centered" data-page-content="2">
<div class="modal-indicator">
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div id="questions">
<span>
<div class="fields">
<h3>Over the past week, how often have you had good physical rest?</h3>
<div class="rating-box-wrapper mar-top30 mar-bot50">
<div class="rating-box">
<h1>0</h1>
</div>
</div>
<div class="mar-top20 mar-bot30" id="range-slider">

<input value="0" id="rating_2" name="lifestyle_inventory[lifestyle_submissions_attributes][6][rating]" class="irs-hidden-input" tabindex="-1" readonly="" type="text">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][6][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_6_lifestyle_question_id" type="hidden">
</div>
</div>
</span>
<span class="hidden">
<h2>Please answer the following about your sleep and rest over the past week:</h2>
<div class="modal-slide-inner">
<div class="survey-categories-header mar-top20">
<div class="left-side">

</div>
<div class="right-side">
<div class="survey-answer-text">Never</div>
<div class="survey-answer-text">Rarely</div>
<div class="survey-answer-text">Sometimes</div>
<div class="survey-answer-text">Frequently</div>
<div class="survey-answer-text">Almost Always</div>
</div>
</div>
<div class="fields">

</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week was your sleep interrupted or disturbed by anything (children, work, fun, illness, sleep disorders, etc.)?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][8][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_rating_25" disabled="disabled" type="radio">
<input value="7" name="lifestyle_inventory[lifestyle_submissions_attributes][8][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_lifestyle_question_id_7" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][8][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_rating_18" disabled="disabled" type="radio">
<input value="7" name="lifestyle_inventory[lifestyle_submissions_attributes][8][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_lifestyle_question_id_7" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][8][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_rating_12" disabled="disabled" type="radio">
<input value="7" name="lifestyle_inventory[lifestyle_submissions_attributes][8][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_lifestyle_question_id_7" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][8][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_rating_6" disabled="disabled" type="radio">
<input value="7" name="lifestyle_inventory[lifestyle_submissions_attributes][8][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_lifestyle_question_id_7" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][8][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_rating_0" disabled="disabled" type="radio">
<input value="7" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][8][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_8_lifestyle_question_id_7" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week did you have a hard time falling asleep - or wake up in the middle of the night?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][9][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_rating_25" disabled="disabled" type="radio">
<input value="8" name="lifestyle_inventory[lifestyle_submissions_attributes][9][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_lifestyle_question_id_8" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][9][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_rating_18" disabled="disabled" type="radio">
<input value="8" name="lifestyle_inventory[lifestyle_submissions_attributes][9][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_lifestyle_question_id_8" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][9][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_rating_12" disabled="disabled" type="radio">
<input value="8" name="lifestyle_inventory[lifestyle_submissions_attributes][9][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_lifestyle_question_id_8" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][9][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_rating_6" disabled="disabled" type="radio">
<input value="8" name="lifestyle_inventory[lifestyle_submissions_attributes][9][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_lifestyle_question_id_8" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][9][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_rating_0" disabled="disabled" type="radio">
<input value="8" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][9][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_9_lifestyle_question_id_8" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week did your sleep schedule vary from a more typical sleep-wake cycle (e.g., not getting to sleep until very late at night, sleeping later in the morning, sleeping in the middle of the day, sleeping too little or too much, etc.)?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][10][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_rating_25" disabled="disabled" type="radio">
<input value="9" name="lifestyle_inventory[lifestyle_submissions_attributes][10][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_lifestyle_question_id_9" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][10][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_rating_18" disabled="disabled" type="radio">
<input value="9" name="lifestyle_inventory[lifestyle_submissions_attributes][10][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_lifestyle_question_id_9" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][10][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_rating_12" disabled="disabled" type="radio">
<input value="9" name="lifestyle_inventory[lifestyle_submissions_attributes][10][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_lifestyle_question_id_9" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][10][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_rating_6" disabled="disabled" type="radio">
<input value="9" name="lifestyle_inventory[lifestyle_submissions_attributes][10][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_lifestyle_question_id_9" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][10][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_rating_0" disabled="disabled" type="radio">
<input value="9" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][10][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_10_lifestyle_question_id_9" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week did you wake up refreshed in the morning - and with healthy levels of energy to start your day?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][11][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_rating_0" disabled="disabled" type="radio">
<input value="10" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][11][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_lifestyle_question_id_10" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][11][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_rating_6" disabled="disabled" type="radio">
<input value="10" name="lifestyle_inventory[lifestyle_submissions_attributes][11][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_lifestyle_question_id_10" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][11][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_rating_12" disabled="disabled" type="radio">
<input value="10" name="lifestyle_inventory[lifestyle_submissions_attributes][11][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_lifestyle_question_id_10" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][11][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_rating_18" disabled="disabled" type="radio">
<input value="10" name="lifestyle_inventory[lifestyle_submissions_attributes][11][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_lifestyle_question_id_10" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][11][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_rating_25" disabled="disabled" type="radio">
<input value="10" name="lifestyle_inventory[lifestyle_submissions_attributes][11][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_11_lifestyle_question_id_10" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
</div>
</span>
</div>
</div>
<div class="form-body-subheader mar-bot10">
<div class="switch_question" data-q-type="xtra">Not sure exactly? Answer a few questions to find out.</div>
</div>
<div class="mar-top20 clearfix mar-bot10">
<div class="button btn-hollow pull-left back">Previous</div>
<div class="button btn-blue pull-right next">Next</div>
</div>
</div>
<div class="form-body centered" data-page-content="3">
<div class="modal-indicator">
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div id="questions">
<span>
<div class="fields">
<h3>Over the past week, how often were you physically active?</h3>
<div class="rating-box-wrapper mar-top30 mar-bot50">
<div class="rating-box">
<h1>0</h1>
</div>
</div>
<div class="mar-top20 mar-bot30" id="range-slider">

<input value="0" id="rating_3" name="lifestyle_inventory[lifestyle_submissions_attributes][12][rating]" class="irs-hidden-input" tabindex="-1" readonly="" type="text">
<input value="11" name="lifestyle_inventory[lifestyle_submissions_attributes][12][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_12_lifestyle_question_id" type="hidden">
</div>
</div>
</span>
<span class="hidden">
<h2>Please answer the following about your physical activity over the past week:</h2>
<div class="modal-slide-inner">
<div class="survey-categories-header mar-top20">
<div class="left-side">

</div>
<div class="right-side">
<div class="survey-answer-text">Never</div>
<div class="survey-answer-text">Rarely</div>
<div class="survey-answer-text">Sometimes</div>
<div class="survey-answer-text">Frequently</div>
<div class="survey-answer-text">Almost Always</div>
</div>
</div>
<div class="fields">

</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How frequently this week did you get any physical activity or exercise?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][14][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_rating_0" disabled="disabled" type="radio">
<input value="12" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][14][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_lifestyle_question_id_12" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][14][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_rating_6" disabled="disabled" type="radio">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][14][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_lifestyle_question_id_12" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][14][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_rating_12" disabled="disabled" type="radio">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][14][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_lifestyle_question_id_12" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][14][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_rating_18" disabled="disabled" type="radio">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][14][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_lifestyle_question_id_12" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][14][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_rating_25" disabled="disabled" type="radio">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][14][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_14_lifestyle_question_id_12" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How frequently this week were you immobile/sitting/sedentary in times you would usually be moving around (for whatever reason - health problems, work deadline, laziness, etc.)?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][15][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_rating_25" disabled="disabled" type="radio">
<input value="13" name="lifestyle_inventory[lifestyle_submissions_attributes][15][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_lifestyle_question_id_13" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][15][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_rating_18" disabled="disabled" type="radio">
<input value="13" name="lifestyle_inventory[lifestyle_submissions_attributes][15][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_lifestyle_question_id_13" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][15][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_rating_12" disabled="disabled" type="radio">
<input value="13" name="lifestyle_inventory[lifestyle_submissions_attributes][15][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_lifestyle_question_id_13" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][15][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_rating_6" disabled="disabled" type="radio">
<input value="13" name="lifestyle_inventory[lifestyle_submissions_attributes][15][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_lifestyle_question_id_13" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][15][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_rating_0" disabled="disabled" type="radio">
<input value="13" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][15][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_15_lifestyle_question_id_13" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">In the physical activity you got this week, how frequently did that include moderate or high-intensity activity that raised your heart rate?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][16][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_rating_0" disabled="disabled" type="radio">
<input value="14" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][16][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_lifestyle_question_id_14" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][16][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_rating_6" disabled="disabled" type="radio">
<input value="14" name="lifestyle_inventory[lifestyle_submissions_attributes][16][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_lifestyle_question_id_14" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][16][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_rating_12" disabled="disabled" type="radio">
<input value="14" name="lifestyle_inventory[lifestyle_submissions_attributes][16][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_lifestyle_question_id_14" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][16][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_rating_18" disabled="disabled" type="radio">
<input value="14" name="lifestyle_inventory[lifestyle_submissions_attributes][16][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_lifestyle_question_id_14" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][16][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_rating_25" disabled="disabled" type="radio">
<input value="14" name="lifestyle_inventory[lifestyle_submissions_attributes][16][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_16_lifestyle_question_id_14" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How frequently this week have you moved around outside in a place you were able to breathe clean air and feel the sun on your face?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][17][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_rating_0" disabled="disabled" type="radio">
<input value="15" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][17][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_lifestyle_question_id_15" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][17][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_rating_6" disabled="disabled" type="radio">
<input value="15" name="lifestyle_inventory[lifestyle_submissions_attributes][17][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_lifestyle_question_id_15" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][17][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_rating_12" disabled="disabled" type="radio">
<input value="15" name="lifestyle_inventory[lifestyle_submissions_attributes][17][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_lifestyle_question_id_15" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][17][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_rating_18" disabled="disabled" type="radio">
<input value="15" name="lifestyle_inventory[lifestyle_submissions_attributes][17][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_lifestyle_question_id_15" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][17][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_rating_25" disabled="disabled" type="radio">
<input value="15" name="lifestyle_inventory[lifestyle_submissions_attributes][17][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_17_lifestyle_question_id_15" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
</div>
</span>
</div>
</div>
<div class="form-body-subheader mar-bot10">
<div class="switch_question" data-q-type="xtra">Not sure exactly? Answer a few questions to find out.</div>
</div>
<div class="mar-top20 clearfix mar-bot10">
<div class="button btn-hollow pull-left back">Previous</div>
<div class="button btn-blue pull-right next">Next</div>
</div>
</div>
<div class="form-body centered" data-page-content="4">
<div class="modal-indicator">
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div id="questions">
<span>
<div class="fields">
<h3>Over the past week, how often have you consumed healthy food and drink?</h3>
<div class="rating-box-wrapper mar-top30 mar-bot50">
<div class="rating-box">
<h1>0</h1>
</div>
</div>
<div class="mar-top20 mar-bot30" id="range-slider">

<span class="irs-line" tabindex="0">
<span class="irs-line-left">

</span>
<span class="irs-line-mid">

</span>
<span class="irs-line-right">

</span>
</span>
<span class="irs-min" style="display: none; visibility: hidden;">0</span>
<span class="irs-max" style="display: none; visibility: visible;">1</span>
<span class="irs-from" style="visibility: hidden;">0</span>
<span class="irs-to" style="visibility: hidden;">0</span>
<span class="irs-single" style="left: -1.14943%;">Never</span>
</span>
<span class="irs-grid" style="width: 96.1686%; left: 1.81571%;">
<span class="irs-grid-pol" style="left: 0%">

</span>
<span class="irs-grid-text js-grid-text-0" style="left: 0%; margin-left: -2.80971%;">Never</span>
<span class="irs-grid-pol small" style="left: 2.5%">

</span>
<span class="irs-grid-pol" style="left: 5%">

</span>
<span class="irs-grid-text js-grid-text-1" style="left: 5%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 7.5%">

</span>
<span class="irs-grid-pol" style="left: 10%">

</span>
<span class="irs-grid-text js-grid-text-2" style="left: 10%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 12.5%">

</span>
<span class="irs-grid-pol" style="left: 15%">

</span>
<span class="irs-grid-text js-grid-text-3" style="left: 15%; visibility: visible; margin-left: -2.93742%;">Rarely</span>
<span class="irs-grid-pol small" style="left: 17.5%">

</span>
<span class="irs-grid-pol" style="left: 20%">

</span>
<span class="irs-grid-text js-grid-text-4" style="left: 20%; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 22.5%">

</span>
<span class="irs-grid-pol" style="left: 25%">

</span>
<span class="irs-grid-text js-grid-text-5" style="left: 25%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 27.5%">

</span>
<span class="irs-grid-pol" style="left: 30%">

</span>
<span class="irs-grid-text js-grid-text-6" style="left: 30%; visibility: visible; margin-left: -5.0447%;">Sometimes</span>
<span class="irs-grid-pol small" style="left: 32.5%">

</span>
<span class="irs-grid-pol" style="left: 35%">

</span>
<span class="irs-grid-text js-grid-text-7" style="left: 35%; visibility: hidden; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 37.5%">

</span>
<span class="irs-grid-pol" style="left: 40%">

</span>
<span class="irs-grid-text js-grid-text-8" style="left: 40%; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 42.5%">

</span>
<span class="irs-grid-pol" style="left: 45%">

</span>
<span class="irs-grid-text js-grid-text-9" style="left: 45%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 47.5%">

</span>
<span class="irs-grid-pol" style="left: 50%">

</span>
<span class="irs-grid-text js-grid-text-10" style="left: 50%; visibility: visible; margin-left: -5.74713%;">Half the time</span>
<span class="irs-grid-pol small" style="left: 52.5%">

</span>
<span class="irs-grid-pol" style="left: 55%">

</span>
<span class="irs-grid-text js-grid-text-11" style="left: 55%; visibility: hidden; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 57.5%">

</span>
<span class="irs-grid-pol" style="left: 60%">

</span>
<span class="irs-grid-text js-grid-text-12" style="left: 60%; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 62.5%">

</span>
<span class="irs-grid-pol" style="left: 65%">

</span>
<span class="irs-grid-text js-grid-text-13" style="left: 65%; visibility: visible; margin-left: -2.74585%;">Often</span>
<span class="irs-grid-pol small" style="left: 67.5%">

</span>
<span class="irs-grid-pol" style="left: 70%">

</span>
<span class="irs-grid-text js-grid-text-14" style="left: 70%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 72.5%">

</span>
<span class="irs-grid-pol" style="left: 75%">

</span>
<span class="irs-grid-text js-grid-text-15" style="left: 75%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 77.5%">

</span>
<span class="irs-grid-pol" style="left: 80%">

</span>
<span class="irs-grid-text js-grid-text-16" style="left: 80%; margin-left: -4.85313%;">Very Often</span>
<span class="irs-grid-pol small" style="left: 82.5%">

</span>
<span class="irs-grid-pol" style="left: 85%">

</span>
<span class="irs-grid-text js-grid-text-17" style="left: 85%; visibility: hidden; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 87.5%">

</span>
<span class="irs-grid-pol" style="left: 90%">

</span>
<span class="irs-grid-text js-grid-text-18" style="left: 90%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 92.5%">

</span>
<span class="irs-grid-pol" style="left: 95%">

</span>
<span class="irs-grid-text js-grid-text-19" style="left: 95%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 97.5%">

</span>
<span class="irs-grid-pol" style="left: 100%">

</span>
<span class="irs-grid-text js-grid-text-20" style="left: 100%; margin-left: -3.38442%;">Always</span>
</span>
<span class="irs-bar" style="left: 1.91571%; width: 0%;">

</span>
<span class="irs-bar-edge">

</span>
<span class="irs-shadow shadow-single" style="display: none;">

</span>
<span class="irs-slider single" style="left: 0%;">

</span>
</span>
<input value="0" id="rating_4" name="lifestyle_inventory[lifestyle_submissions_attributes][18][rating]" class="irs-hidden-input" tabindex="-1" readonly="" type="text">
<input value="16" name="lifestyle_inventory[lifestyle_submissions_attributes][18][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_18_lifestyle_question_id" type="hidden">
</div>
</div>
</span>
<span class="hidden">
<h2>Please answer the following about your nutrition over the past week:</h2>
<div class="modal-slide-inner">
<div class="survey-categories-header mar-top20">
<div class="left-side">

</div>
<div class="right-side">
<div class="survey-answer-text">Never</div>
<div class="survey-answer-text">Rarely</div>
<div class="survey-answer-text">Sometimes</div>
<div class="survey-answer-text">Frequently</div>
<div class="survey-answer-text">Almost Always</div>
</div>
</div>
<div class="fields">

</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week did you eat healthy, natural foods that you know to be good for your body (fruits, vegetables, whole grains, etc.)?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][20][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_rating_0" disabled="disabled" type="radio">
<input value="17" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][20][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_lifestyle_question_id_17" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][20][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_rating_6" disabled="disabled" type="radio">
<input value="17" name="lifestyle_inventory[lifestyle_submissions_attributes][20][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_lifestyle_question_id_17" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][20][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_rating_12" disabled="disabled" type="radio">
<input value="17" name="lifestyle_inventory[lifestyle_submissions_attributes][20][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_lifestyle_question_id_17" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][20][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_rating_18" disabled="disabled" type="radio">
<input value="17" name="lifestyle_inventory[lifestyle_submissions_attributes][20][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_lifestyle_question_id_17" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][20][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_rating_25" disabled="disabled" type="radio">
<input value="17" name="lifestyle_inventory[lifestyle_submissions_attributes][20][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_20_lifestyle_question_id_17" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week did you consume substances or beverages with refined sugar (candy, desserts, soda, and other treats) or caffeine (energy drinks, coffee, sodas)?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][21][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_rating_25" disabled="disabled" type="radio">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][21][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_lifestyle_question_id_18" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][21][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_rating_18" disabled="disabled" type="radio">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][21][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_lifestyle_question_id_18" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][21][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_rating_12" disabled="disabled" type="radio">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][21][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_lifestyle_question_id_18" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][21][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_rating_6" disabled="disabled" type="radio">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][21][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_lifestyle_question_id_18" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][21][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_rating_0" disabled="disabled" type="radio">
<input value="18" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][21][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_21_lifestyle_question_id_18" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week did you stay hydrated and drink a good amount of water throughout the days?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][22][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_rating_0" disabled="disabled" type="radio">
<input value="19" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][22][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_lifestyle_question_id_19" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][22][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_rating_6" disabled="disabled" type="radio">
<input value="19" name="lifestyle_inventory[lifestyle_submissions_attributes][22][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_lifestyle_question_id_19" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][22][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_rating_12" disabled="disabled" type="radio">
<input value="19" name="lifestyle_inventory[lifestyle_submissions_attributes][22][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_lifestyle_question_id_19" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][22][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_rating_18" disabled="disabled" type="radio">
<input value="19" name="lifestyle_inventory[lifestyle_submissions_attributes][22][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_lifestyle_question_id_19" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][22][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_rating_25" disabled="disabled" type="radio">
<input value="19" name="lifestyle_inventory[lifestyle_submissions_attributes][22][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_22_lifestyle_question_id_19" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week would you say you either ate MORE food than your body needed - or LESS food than your body needed?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][23][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_rating_25" disabled="disabled" type="radio">
<input value="20" name="lifestyle_inventory[lifestyle_submissions_attributes][23][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_lifestyle_question_id_20" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][23][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_rating_18" disabled="disabled" type="radio">
<input value="20" name="lifestyle_inventory[lifestyle_submissions_attributes][23][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_lifestyle_question_id_20" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][23][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_rating_12" disabled="disabled" type="radio">
<input value="20" name="lifestyle_inventory[lifestyle_submissions_attributes][23][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_lifestyle_question_id_20" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][23][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_rating_6" disabled="disabled" type="radio">
<input value="20" name="lifestyle_inventory[lifestyle_submissions_attributes][23][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_lifestyle_question_id_20" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][23][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_rating_0" disabled="disabled" type="radio">
<input value="20" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][23][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_23_lifestyle_question_id_20" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
</div>
</span>
</div>
</div>
<div class="form-body-subheader mar-bot10">
<div class="switch_question" data-q-type="xtra">Not sure exactly? Answer a few questions to find out.</div>
</div>
<div class="mar-top20 clearfix mar-bot10">
<div class="button btn-hollow pull-left back">Previous</div>
<div class="button btn-blue pull-right next">Next</div>
</div>
</div>
<div class="form-body centered" data-page-content="5">
<div class="modal-indicator">
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div id="questions">
<span>
<div class="fields">
<h3>Over the past week, how often have you consumed media that had a positive influence on you? (videos, social media, articles, music, etc.)</h3>
<div class="rating-box-wrapper mar-top30 mar-bot50">
<div class="rating-box">
<h1>0</h1>
</div>
</div>
<div class="mar-top20 mar-bot30" id="range-slider">

<span class="irs-line" tabindex="0">
<span class="irs-line-left">

</span>
<span class="irs-line-mid">

</span>
<span class="irs-line-right">

</span>
</span>
<span class="irs-min" style="display: none; visibility: hidden;">0</span>
<span class="irs-max" style="display: none; visibility: visible;">1</span>
<span class="irs-from" style="visibility: hidden;">0</span>
<span class="irs-to" style="visibility: hidden;">0</span>
<span class="irs-single" style="left: -1.14943%;">Never</span>
</span>
<span class="irs-grid" style="width: 96.1686%; left: 1.81571%;">
<span class="irs-grid-pol" style="left: 0%">

</span>
<span class="irs-grid-text js-grid-text-0" style="left: 0%; margin-left: -2.80971%;">Never</span>
<span class="irs-grid-pol small" style="left: 2.5%">

</span>
<span class="irs-grid-pol" style="left: 5%">

</span>
<span class="irs-grid-text js-grid-text-1" style="left: 5%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 7.5%">

</span>
<span class="irs-grid-pol" style="left: 10%">

</span>
<span class="irs-grid-text js-grid-text-2" style="left: 10%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 12.5%">

</span>
<span class="irs-grid-pol" style="left: 15%">

</span>
<span class="irs-grid-text js-grid-text-3" style="left: 15%; visibility: visible; margin-left: -2.93742%;">Rarely</span>
<span class="irs-grid-pol small" style="left: 17.5%">

</span>
<span class="irs-grid-pol" style="left: 20%">

</span>
<span class="irs-grid-text js-grid-text-4" style="left: 20%; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 22.5%">

</span>
<span class="irs-grid-pol" style="left: 25%">

</span>
<span class="irs-grid-text js-grid-text-5" style="left: 25%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 27.5%">

</span>
<span class="irs-grid-pol" style="left: 30%">

</span>
<span class="irs-grid-text js-grid-text-6" style="left: 30%; visibility: visible; margin-left: -5.0447%;">Sometimes</span>
<span class="irs-grid-pol small" style="left: 32.5%">

</span>
<span class="irs-grid-pol" style="left: 35%">

</span>
<span class="irs-grid-text js-grid-text-7" style="left: 35%; visibility: hidden; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 37.5%">

</span>
<span class="irs-grid-pol" style="left: 40%">

</span>
<span class="irs-grid-text js-grid-text-8" style="left: 40%; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 42.5%">

</span>
<span class="irs-grid-pol" style="left: 45%">

</span>
<span class="irs-grid-text js-grid-text-9" style="left: 45%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 47.5%">

</span>
<span class="irs-grid-pol" style="left: 50%">

</span>
<span class="irs-grid-text js-grid-text-10" style="left: 50%; visibility: visible; margin-left: -5.74713%;">Half the time</span>
<span class="irs-grid-pol small" style="left: 52.5%">

</span>
<span class="irs-grid-pol" style="left: 55%">

</span>
<span class="irs-grid-text js-grid-text-11" style="left: 55%; visibility: hidden; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 57.5%">

</span>
<span class="irs-grid-pol" style="left: 60%">

</span>
<span class="irs-grid-text js-grid-text-12" style="left: 60%; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 62.5%">

</span>
<span class="irs-grid-pol" style="left: 65%">

</span>
<span class="irs-grid-text js-grid-text-13" style="left: 65%; visibility: visible; margin-left: -2.74585%;">Often</span>
<span class="irs-grid-pol small" style="left: 67.5%">

</span>
<span class="irs-grid-pol" style="left: 70%">

</span>
<span class="irs-grid-text js-grid-text-14" style="left: 70%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 72.5%">

</span>
<span class="irs-grid-pol" style="left: 75%">

</span>
<span class="irs-grid-text js-grid-text-15" style="left: 75%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 77.5%">

</span>
<span class="irs-grid-pol" style="left: 80%">

</span>
<span class="irs-grid-text js-grid-text-16" style="left: 80%; margin-left: -4.85313%;">Very Often</span>
<span class="irs-grid-pol small" style="left: 82.5%">

</span>
<span class="irs-grid-pol" style="left: 85%">

</span>
<span class="irs-grid-text js-grid-text-17" style="left: 85%; visibility: hidden; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 87.5%">

</span>
<span class="irs-grid-pol" style="left: 90%">

</span>
<span class="irs-grid-text js-grid-text-18" style="left: 90%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 92.5%">

</span>
<span class="irs-grid-pol" style="left: 95%">

</span>
<span class="irs-grid-text js-grid-text-19" style="left: 95%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 97.5%">

</span>
<span class="irs-grid-pol" style="left: 100%">

</span>
<span class="irs-grid-text js-grid-text-20" style="left: 100%; margin-left: -3.38442%;">Always</span>
</span>
<span class="irs-bar" style="left: 1.91571%; width: 0%;">

</span>
<span class="irs-bar-edge">

</span>
<span class="irs-shadow shadow-single" style="display: none;">

</span>
<span class="irs-slider single" style="left: 0%;">

</span>
</span>
<input value="0" id="rating_5" name="lifestyle_inventory[lifestyle_submissions_attributes][24][rating]" class="irs-hidden-input" tabindex="-1" readonly="" type="text">
<input value="21" name="lifestyle_inventory[lifestyle_submissions_attributes][24][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_24_lifestyle_question_id" type="hidden">
</div>
</div>
</span>
<span class="hidden">
<h2>Please answer the following about your “mental diet” over the past week:</h2>
<div class="modal-slide-inner">
<div class="survey-categories-header mar-top20">
<div class="left-side">

</div>
<div class="right-side">
<div class="survey-answer-text">Never</div>
<div class="survey-answer-text">Rarely</div>
<div class="survey-answer-text">Sometimes</div>
<div class="survey-answer-text">Frequently</div>
<div class="survey-answer-text">Almost Always</div>
</div>
</div>
<div class="fields">

</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week did you watch TV shows or movies, including online?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][26][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_rating_25" disabled="disabled" type="radio">
<input value="22" name="lifestyle_inventory[lifestyle_submissions_attributes][26][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_lifestyle_question_id_22" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][26][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_rating_18" disabled="disabled" type="radio">
<input value="22" name="lifestyle_inventory[lifestyle_submissions_attributes][26][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_lifestyle_question_id_22" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][26][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_rating_12" disabled="disabled" type="radio">
<input value="22" name="lifestyle_inventory[lifestyle_submissions_attributes][26][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_lifestyle_question_id_22" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][26][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_rating_6" disabled="disabled" type="radio">
<input value="22" name="lifestyle_inventory[lifestyle_submissions_attributes][26][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_lifestyle_question_id_22" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][26][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_rating_0" disabled="disabled" type="radio">
<input value="22" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][26][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_26_lifestyle_question_id_22" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week did you spend your free time online (surfing, playing games, or other activities)?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][27][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_rating_25" disabled="disabled" type="radio">
<input value="23" name="lifestyle_inventory[lifestyle_submissions_attributes][27][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_lifestyle_question_id_23" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][27][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_rating_18" disabled="disabled" type="radio">
<input value="23" name="lifestyle_inventory[lifestyle_submissions_attributes][27][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_lifestyle_question_id_23" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][27][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_rating_12" disabled="disabled" type="radio">
<input value="23" name="lifestyle_inventory[lifestyle_submissions_attributes][27][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_lifestyle_question_id_23" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][27][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_rating_6" disabled="disabled" type="radio">
<input value="23" name="lifestyle_inventory[lifestyle_submissions_attributes][27][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_lifestyle_question_id_23" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][27][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_rating_0" disabled="disabled" type="radio">
<input value="23" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][27][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_27_lifestyle_question_id_23" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week did you consume any kind of media (digital, print, audio) that negatively influenced your mood in some way?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][28][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_rating_25" disabled="disabled" type="radio">
<input value="24" name="lifestyle_inventory[lifestyle_submissions_attributes][28][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_lifestyle_question_id_24" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][28][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_rating_18" disabled="disabled" type="radio">
<input value="24" name="lifestyle_inventory[lifestyle_submissions_attributes][28][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_lifestyle_question_id_24" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][28][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_rating_12" disabled="disabled" type="radio">
<input value="24" name="lifestyle_inventory[lifestyle_submissions_attributes][28][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_lifestyle_question_id_24" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][28][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_rating_6" disabled="disabled" type="radio">
<input value="24" name="lifestyle_inventory[lifestyle_submissions_attributes][28][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_lifestyle_question_id_24" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][28][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_rating_0" disabled="disabled" type="radio">
<input value="24" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][28][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_28_lifestyle_question_id_24" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week did you spend time free from noise or distraction? (reading, meditation, walk in nature, prayer, etc.)</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][29][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_rating_0" disabled="disabled" type="radio">
<input value="25" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][29][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_lifestyle_question_id_25" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][29][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_rating_6" disabled="disabled" type="radio">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][29][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_lifestyle_question_id_25" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][29][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_rating_12" disabled="disabled" type="radio">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][29][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_lifestyle_question_id_25" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][29][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_rating_18" disabled="disabled" type="radio">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][29][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_lifestyle_question_id_25" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][29][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_rating_25" disabled="disabled" type="radio">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][29][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_29_lifestyle_question_id_25" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
</div>
</span>
</div>
</div>
<div class="form-body-subheader mar-bot10">
<div class="switch_question" data-q-type="xtra">Not sure exactly? Answer a few questions to find out.</div>
</div>
<div class="mar-top20 clearfix mar-bot10">
<div class="button btn-hollow pull-left back">Previous</div>
<div class="button btn-blue pull-right next">Next</div>
</div>
</div>
<div class="form-body centered" data-page-content="6">
<div class="modal-indicator">
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div id="questions">
<span>
<div class="fields">
<h3>Over the past week, how often have you spent quality time with important relationships in your life?</h3>
<div class="rating-box-wrapper mar-top30 mar-bot50">
<div class="rating-box">
<h1>0</h1>
</div>
</div>
<div class="mar-top20 mar-bot30" id="range-slider">

<span class="irs-line" tabindex="0">
<span class="irs-line-left">

</span>
<span class="irs-line-mid">

</span>
<span class="irs-line-right">

</span>
</span>
<span class="irs-min" style="display: none; visibility: hidden;">0</span>
<span class="irs-max" style="display: none; visibility: visible;">1</span>
<span class="irs-from" style="visibility: hidden;">0</span>
<span class="irs-to" style="visibility: hidden;">0</span>
<span class="irs-single" style="left: -1.14943%;">Never</span>
</span>
<span class="irs-grid" style="width: 96.1686%; left: 1.81571%;">
<span class="irs-grid-pol" style="left: 0%">

</span>
<span class="irs-grid-text js-grid-text-0" style="left: 0%; margin-left: -2.80971%;">Never</span>
<span class="irs-grid-pol small" style="left: 2.5%">

</span>
<span class="irs-grid-pol" style="left: 5%">

</span>
<span class="irs-grid-text js-grid-text-1" style="left: 5%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 7.5%">

</span>
<span class="irs-grid-pol" style="left: 10%">

</span>
<span class="irs-grid-text js-grid-text-2" style="left: 10%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 12.5%">

</span>
<span class="irs-grid-pol" style="left: 15%">

</span>
<span class="irs-grid-text js-grid-text-3" style="left: 15%; visibility: visible; margin-left: -2.93742%;">Rarely</span>
<span class="irs-grid-pol small" style="left: 17.5%">

</span>
<span class="irs-grid-pol" style="left: 20%">

</span>
<span class="irs-grid-text js-grid-text-4" style="left: 20%; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 22.5%">

</span>
<span class="irs-grid-pol" style="left: 25%">

</span>
<span class="irs-grid-text js-grid-text-5" style="left: 25%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 27.5%">

</span>
<span class="irs-grid-pol" style="left: 30%">

</span>
<span class="irs-grid-text js-grid-text-6" style="left: 30%; visibility: visible; margin-left: -5.0447%;">Sometimes</span>
<span class="irs-grid-pol small" style="left: 32.5%">

</span>
<span class="irs-grid-pol" style="left: 35%">

</span>
<span class="irs-grid-text js-grid-text-7" style="left: 35%; visibility: hidden; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 37.5%">

</span>
<span class="irs-grid-pol" style="left: 40%">

</span>
<span class="irs-grid-text js-grid-text-8" style="left: 40%; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 42.5%">

</span>
<span class="irs-grid-pol" style="left: 45%">

</span>
<span class="irs-grid-text js-grid-text-9" style="left: 45%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 47.5%">

</span>
<span class="irs-grid-pol" style="left: 50%">

</span>
<span class="irs-grid-text js-grid-text-10" style="left: 50%; visibility: visible; margin-left: -5.74713%;">Half the time</span>
<span class="irs-grid-pol small" style="left: 52.5%">

</span>
<span class="irs-grid-pol" style="left: 55%">

</span>
<span class="irs-grid-text js-grid-text-11" style="left: 55%; visibility: hidden; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 57.5%">

</span>
<span class="irs-grid-pol" style="left: 60%">

</span>
<span class="irs-grid-text js-grid-text-12" style="left: 60%; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 62.5%">

</span>
<span class="irs-grid-pol" style="left: 65%">

</span>
<span class="irs-grid-text js-grid-text-13" style="left: 65%; visibility: visible; margin-left: -2.74585%;">Often</span>
<span class="irs-grid-pol small" style="left: 67.5%">

</span>
<span class="irs-grid-pol" style="left: 70%">

</span>
<span class="irs-grid-text js-grid-text-14" style="left: 70%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 72.5%">

</span>
<span class="irs-grid-pol" style="left: 75%">

</span>
<span class="irs-grid-text js-grid-text-15" style="left: 75%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 77.5%">

</span>
<span class="irs-grid-pol" style="left: 80%">

</span>
<span class="irs-grid-text js-grid-text-16" style="left: 80%; margin-left: -4.85313%;">Very Often</span>
<span class="irs-grid-pol small" style="left: 82.5%">

</span>
<span class="irs-grid-pol" style="left: 85%">

</span>
<span class="irs-grid-text js-grid-text-17" style="left: 85%; visibility: hidden; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 87.5%">

</span>
<span class="irs-grid-pol" style="left: 90%">

</span>
<span class="irs-grid-text js-grid-text-18" style="left: 90%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 92.5%">

</span>
<span class="irs-grid-pol" style="left: 95%">

</span>
<span class="irs-grid-text js-grid-text-19" style="left: 95%; visibility: visible; margin-left: -0.383142%;">

</span>
<span class="irs-grid-pol small" style="left: 97.5%">

</span>
<span class="irs-grid-pol" style="left: 100%">

</span>
<span class="irs-grid-text js-grid-text-20" style="left: 100%; margin-left: -3.38442%;">Always</span>
</span>
<span class="irs-bar" style="left: 1.91571%; width: 0%;">

</span>
<span class="irs-bar-edge">

</span>
<span class="irs-shadow shadow-single" style="display: none;">

</span>
<span class="irs-slider single" style="left: 0%;">

</span>
</span>
<input value="0" id="rating_6" name="lifestyle_inventory[lifestyle_submissions_attributes][30][rating]" class="irs-hidden-input" tabindex="-1" readonly="" type="text">
<input value="26" name="lifestyle_inventory[lifestyle_submissions_attributes][30][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_30_lifestyle_question_id" type="hidden">
</div>
</div>
</span>
<span class="hidden">
<h2>Please answer the following about your relationships and social connections over the past week:</h2>
<div class="modal-slide-inner">
<div class="survey-categories-header mar-top20">
<div class="left-side">

</div>
<div class="right-side">
<div class="survey-answer-text">Never</div>
<div class="survey-answer-text">Rarely</div>
<div class="survey-answer-text">Sometimes</div>
<div class="survey-answer-text">Frequently</div>
<div class="survey-answer-text">Almost Always</div>
</div>
</div>
<div class="fields">

</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week have you been open and honest with people in your life about how you’re doing?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][32][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_rating_0" disabled="disabled" type="radio">
<input value="27" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][32][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_lifestyle_question_id_27" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][32][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_rating_6" disabled="disabled" type="radio">
<input value="27" name="lifestyle_inventory[lifestyle_submissions_attributes][32][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_lifestyle_question_id_27" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][32][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_rating_12" disabled="disabled" type="radio">
<input value="27" name="lifestyle_inventory[lifestyle_submissions_attributes][32][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_lifestyle_question_id_27" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][32][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_rating_18" disabled="disabled" type="radio">
<input value="27" name="lifestyle_inventory[lifestyle_submissions_attributes][32][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_lifestyle_question_id_27" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][32][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_rating_25" disabled="disabled" type="radio">
<input value="27" name="lifestyle_inventory[lifestyle_submissions_attributes][32][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_32_lifestyle_question_id_27" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How this week have you interacted with others who are supporting you in your healing and recovery?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][33][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_rating_0" disabled="disabled" type="radio">
<input value="28" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][33][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_lifestyle_question_id_28" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][33][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_rating_6" disabled="disabled" type="radio">
<input value="28" name="lifestyle_inventory[lifestyle_submissions_attributes][33][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_lifestyle_question_id_28" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][33][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_rating_12" disabled="disabled" type="radio">
<input value="28" name="lifestyle_inventory[lifestyle_submissions_attributes][33][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_lifestyle_question_id_28" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][33][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_rating_18" disabled="disabled" type="radio">
<input value="28" name="lifestyle_inventory[lifestyle_submissions_attributes][33][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_lifestyle_question_id_28" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][33][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_rating_25" disabled="disabled" type="radio">
<input value="28" name="lifestyle_inventory[lifestyle_submissions_attributes][33][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_33_lifestyle_question_id_28" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week have you been sensitive to other’s needs and trying to prioritize their feelings in your choices and decisions?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][34][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_rating_0" disabled="disabled" type="radio">
<input value="29" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][34][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_lifestyle_question_id_29" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][34][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_rating_6" disabled="disabled" type="radio">
<input value="29" name="lifestyle_inventory[lifestyle_submissions_attributes][34][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_lifestyle_question_id_29" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][34][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_rating_12" disabled="disabled" type="radio">
<input value="29" name="lifestyle_inventory[lifestyle_submissions_attributes][34][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_lifestyle_question_id_29" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][34][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_rating_18" disabled="disabled" type="radio">
<input value="29" name="lifestyle_inventory[lifestyle_submissions_attributes][34][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_lifestyle_question_id_29" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][34][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_rating_25" disabled="disabled" type="radio">
<input value="29" name="lifestyle_inventory[lifestyle_submissions_attributes][34][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_34_lifestyle_question_id_29" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week did you take care of key relationships in your life, by helping others feel loved in some way (time, service, notes, etc.)?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][35][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_rating_0" disabled="disabled" type="radio">
<input value="30" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][35][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_lifestyle_question_id_30" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][35][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_rating_6" disabled="disabled" type="radio">
<input value="30" name="lifestyle_inventory[lifestyle_submissions_attributes][35][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_lifestyle_question_id_30" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][35][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_rating_12" disabled="disabled" type="radio">
<input value="30" name="lifestyle_inventory[lifestyle_submissions_attributes][35][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_lifestyle_question_id_30" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][35][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_rating_18" disabled="disabled" type="radio">
<input value="30" name="lifestyle_inventory[lifestyle_submissions_attributes][35][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_lifestyle_question_id_30" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][35][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_rating_25" disabled="disabled" type="radio">
<input value="30" name="lifestyle_inventory[lifestyle_submissions_attributes][35][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_35_lifestyle_question_id_30" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
</div>
</span>
</div>
</div>
<div class="form-body-subheader mar-bot10">
<div class="switch_question" data-q-type="xtra">Not sure exactly? Answer a few questions to find out.</div>
</div>
<div class="mar-top20 clearfix mar-bot10">
<div class="button btn-hollow pull-left back">Previous</div>
<div class="button btn-blue pull-right next">Next</div>
</div>
</div> 
<div class="form-body centered" data-page-content="7">
<div class="modal-indicator">
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div id="questions">
<span>
<div class="fields">
<h3>Over the past week, how often has your stress level been healthy?</h3>
<div class="rating-box-wrapper mar-top30 mar-bot50">
<div class="rating-box">
<h1>0</h1>
</div>
</div>
<div class="mar-top20 mar-bot30" id="range-slider">

<input value="0" id="rating_7" name="lifestyle_inventory[lifestyle_submissions_attributes][36][rating]" class="irs-hidden-input" tabindex="-1" readonly="" type="text">
<input value="31" name="lifestyle_inventory[lifestyle_submissions_attributes][36][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_36_lifestyle_question_id" type="hidden">
</div>
</div>
</span>
<span class="hidden">
<h2>Please answer the following about your experience with stress over the past week:</h2>
<div class="modal-slide-inner">
<div class="survey-categories-header mar-top20">
<div class="left-side">

</div>
<div class="right-side">
<div class="survey-answer-text">Never</div>
<div class="survey-answer-text">Rarely</div>
<div class="survey-answer-text">Sometimes</div>
<div class="survey-answer-text">Frequently</div>
<div class="survey-answer-text">Almost Always</div>
</div>
</div>
<div class="fields">

</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week did you schedule or try to fit in more work/activities than you know you’re really going to be able to handle?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][38][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_rating_25" disabled="disabled" type="radio">
<input value="32" name="lifestyle_inventory[lifestyle_submissions_attributes][38][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_lifestyle_question_id_32" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][38][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_rating_18" disabled="disabled" type="radio">
<input value="32" name="lifestyle_inventory[lifestyle_submissions_attributes][38][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_lifestyle_question_id_32" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][38][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_rating_12" disabled="disabled" type="radio">
<input value="32" name="lifestyle_inventory[lifestyle_submissions_attributes][38][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_lifestyle_question_id_32" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][38][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_rating_6" disabled="disabled" type="radio">
<input value="32" name="lifestyle_inventory[lifestyle_submissions_attributes][38][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_lifestyle_question_id_32" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][38][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_rating_0" disabled="disabled" type="radio">
<input value="32" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][38][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_38_lifestyle_question_id_32" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week did you feel “stressed out” or overwhelmed with your life - wondering whether you could cope with all the things that you had to do?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][39][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_rating_25" disabled="disabled" type="radio">
<input value="33" name="lifestyle_inventory[lifestyle_submissions_attributes][39][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_lifestyle_question_id_33" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][39][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_rating_18" disabled="disabled" type="radio">
<input value="33" name="lifestyle_inventory[lifestyle_submissions_attributes][39][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_lifestyle_question_id_33" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][39][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_rating_12" disabled="disabled" type="radio">
<input value="33" name="lifestyle_inventory[lifestyle_submissions_attributes][39][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_lifestyle_question_id_33" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][39][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_rating_6" disabled="disabled" type="radio">
<input value="33" name="lifestyle_inventory[lifestyle_submissions_attributes][39][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_lifestyle_question_id_33" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][39][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_rating_0" disabled="disabled" type="radio">
<input value="33" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][39][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_39_lifestyle_question_id_33" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week did you feel shortness of breath, headaches or other physical symptoms of stress?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][40][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_rating_25" disabled="disabled" type="radio">
<input value="34" name="lifestyle_inventory[lifestyle_submissions_attributes][40][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_lifestyle_question_id_34" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][40][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_rating_18" disabled="disabled" type="radio">
<input value="34" name="lifestyle_inventory[lifestyle_submissions_attributes][40][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_lifestyle_question_id_34" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][40][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_rating_12" disabled="disabled" type="radio">
<input value="34" name="lifestyle_inventory[lifestyle_submissions_attributes][40][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_lifestyle_question_id_34" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][40][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_rating_6" disabled="disabled" type="radio">
<input value="34" name="lifestyle_inventory[lifestyle_submissions_attributes][40][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_lifestyle_question_id_34" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][40][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_rating_0" disabled="disabled" type="radio">
<input value="34" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][40][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_40_lifestyle_question_id_34" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week were you able to respond to stressful moments well (calmly, or with a healthy perspective)?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][41][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_rating_0" disabled="disabled" type="radio">
<input value="35" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][41][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_lifestyle_question_id_35" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][41][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_rating_6" disabled="disabled" type="radio">
<input value="35" name="lifestyle_inventory[lifestyle_submissions_attributes][41][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_lifestyle_question_id_35" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][41][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_rating_12" disabled="disabled" type="radio">
<input value="35" name="lifestyle_inventory[lifestyle_submissions_attributes][41][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_lifestyle_question_id_35" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][41][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_rating_18" disabled="disabled" type="radio">
<input value="35" name="lifestyle_inventory[lifestyle_submissions_attributes][41][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_lifestyle_question_id_35" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][41][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_rating_25" disabled="disabled" type="radio">
<input value="35" name="lifestyle_inventory[lifestyle_submissions_attributes][41][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_41_lifestyle_question_id_35" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
</div>
</span>
</div>
</div>
<div class="form-body-subheader mar-bot10">
<div class="switch_question" data-q-type="xtra">Not sure exactly? Answer a few questions to find out.</div>
</div>
<div class="mar-top20 clearfix mar-bot10">
<div class="button btn-hollow pull-left back">Previous</div>
<div class="button btn-blue pull-right next">Next</div>
</div>
</div>
<div class="form-body centered" data-page-content="8">
<div class="modal-indicator">
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot">

</div>
<div id="questions">
<span>
<div class="fields">
<h3>Over the past week, how often have you experienced a sense of meaning and purpose?</h3>
<div class="rating-box-wrapper mar-top30 mar-bot50">
<div class="rating-box">
<h1>0</h1>
</div>
</div>
<div class="mar-top20 mar-bot30" id="range-slider">

<input value="0" id="rating_8" name="lifestyle_inventory[lifestyle_submissions_attributes][42][rating]" class="irs-hidden-input" tabindex="-1" readonly="" type="text">
<input value="36" name="lifestyle_inventory[lifestyle_submissions_attributes][42][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_42_lifestyle_question_id" type="hidden">
</div>
</div>
</span>
<span class="hidden">
<h2>Please answer the following about your sense of meaning and purpose over the past week:</h2>
<div class="modal-slide-inner">
<div class="survey-categories-header mar-top20">
<div class="left-side">

</div>
<div class="right-side">
<div class="survey-answer-text">Never</div>
<div class="survey-answer-text">Rarely</div>
<div class="survey-answer-text">Sometimes</div>
<div class="survey-answer-text">Frequently</div>
<div class="survey-answer-text">Almost Always</div>
</div>
</div>
<div class="fields">

</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week have you felt self-worth about who you are and happy with the direction of your life?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][44][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_rating_0" disabled="disabled" type="radio">
<input value="37" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][44][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_lifestyle_question_id_37" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][44][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_rating_6" disabled="disabled" type="radio">
<input value="37" name="lifestyle_inventory[lifestyle_submissions_attributes][44][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_lifestyle_question_id_37" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][44][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_rating_12" disabled="disabled" type="radio">
<input value="37" name="lifestyle_inventory[lifestyle_submissions_attributes][44][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_lifestyle_question_id_37" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][44][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_rating_18" disabled="disabled" type="radio">
<input value="37" name="lifestyle_inventory[lifestyle_submissions_attributes][44][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_lifestyle_question_id_37" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][44][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_rating_25" disabled="disabled" type="radio">
<input value="37" name="lifestyle_inventory[lifestyle_submissions_attributes][44][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_44_lifestyle_question_id_37" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week have you been involved in work, activities or responsibilities that are making some kind of a contribution or difference in the world?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][45][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_rating_0" disabled="disabled" type="radio">
<input value="38" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][45][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_lifestyle_question_id_38" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][45][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_rating_6" disabled="disabled" type="radio">
<input value="38" name="lifestyle_inventory[lifestyle_submissions_attributes][45][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_lifestyle_question_id_38" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][45][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_rating_12" disabled="disabled" type="radio">
<input value="38" name="lifestyle_inventory[lifestyle_submissions_attributes][45][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_lifestyle_question_id_38" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][45][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_rating_18" disabled="disabled" type="radio">
<input value="38" name="lifestyle_inventory[lifestyle_submissions_attributes][45][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_lifestyle_question_id_38" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][45][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_rating_25" disabled="disabled" type="radio">
<input value="38" name="lifestyle_inventory[lifestyle_submissions_attributes][45][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_45_lifestyle_question_id_38" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week have you felt there is a deeper meaning or a higher purpose to your life?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][46][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_rating_0" disabled="disabled" type="radio">
<input value="39" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][46][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_lifestyle_question_id_39" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][46][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_rating_6" disabled="disabled" type="radio">
<input value="39" name="lifestyle_inventory[lifestyle_submissions_attributes][46][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_lifestyle_question_id_39" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][46][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_rating_12" disabled="disabled" type="radio">
<input value="39" name="lifestyle_inventory[lifestyle_submissions_attributes][46][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_lifestyle_question_id_39" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][46][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_rating_18" disabled="disabled" type="radio">
<input value="39" name="lifestyle_inventory[lifestyle_submissions_attributes][46][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_lifestyle_question_id_39" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][46][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_rating_25" disabled="disabled" type="radio">
<input value="39" name="lifestyle_inventory[lifestyle_submissions_attributes][46][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_46_lifestyle_question_id_39" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week have you engaged in spiritual practices that lifted you in some way?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][47][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_rating_0" disabled="disabled" type="radio">
<input value="40" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][47][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_lifestyle_question_id_40" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][47][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_rating_6" disabled="disabled" type="radio">
<input value="40" name="lifestyle_inventory[lifestyle_submissions_attributes][47][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_lifestyle_question_id_40" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][47][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_rating_12" disabled="disabled" type="radio">
<input value="40" name="lifestyle_inventory[lifestyle_submissions_attributes][47][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_lifestyle_question_id_40" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][47][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_rating_18" disabled="disabled" type="radio">
<input value="40" name="lifestyle_inventory[lifestyle_submissions_attributes][47][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_lifestyle_question_id_40" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][47][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_rating_25" disabled="disabled" type="radio">
<input value="40" name="lifestyle_inventory[lifestyle_submissions_attributes][47][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_47_lifestyle_question_id_40" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
</div>
</span>
</div>
</div>
<div class="form-body-subheader mar-bot10">
<div class="switch_question" data-q-type="xtra">Not sure exactly? Answer a few questions to find out.</div>
</div>
<div class="mar-top20 clearfix mar-bot10">
<div class="button btn-hollow pull-left back">Previous</div>
<div class="button btn-blue pull-right next">Next</div>
</div>
</div>
<div class="form-body centered" data-page-content="9">
<div class="modal-indicator">
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div class="modal-line">

</div>
<div class="modal-dot active">

</div>
<div id="questions">
<span>
<div class="fields">
<h3>Over the past week, how often have you made time for silence, stillness, or solitude?</h3>
<div class="rating-box-wrapper mar-top30 mar-bot50">
<div class="rating-box">
<h1>0</h1>
</div>
</div>
<div class="mar-top20 mar-bot30" id="range-slider">

<input value="0" id="rating_9" name="lifestyle_inventory[lifestyle_submissions_attributes][48][rating]" class="irs-hidden-input" tabindex="-1" readonly="" type="text">
<input value="41" name="lifestyle_inventory[lifestyle_submissions_attributes][48][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_48_lifestyle_question_id" type="hidden">
</div>
</div>
</span>
<span class="hidden">
<h2>Please answer the following about your mental hygiene and mindfulness over the past week:</h2>
<div class="modal-slide-inner">
<div class="survey-categories-header mar-top20">
<div class="left-side">

</div>
<div class="right-side">
<div class="survey-answer-text">Never</div>
<div class="survey-answer-text">Rarely</div>
<div class="survey-answer-text">Sometimes</div>
<div class="survey-answer-text">Frequently</div>
<div class="survey-answer-text">Almost Always</div>
</div>
</div>
<div class="fields">

</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week have you engaged in activities that involve focusing the mind on a single object of attention? (reading, art, meditation, prayer, one-on-one conversation, etc.)</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][50][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_rating_0" disabled="disabled" type="radio">
<input value="42" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][50][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_lifestyle_question_id_42" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][50][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_rating_6" disabled="disabled" type="radio">
<input value="42" name="lifestyle_inventory[lifestyle_submissions_attributes][50][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_lifestyle_question_id_42" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][50][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_rating_12" disabled="disabled" type="radio">
<input value="42" name="lifestyle_inventory[lifestyle_submissions_attributes][50][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_lifestyle_question_id_42" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][50][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_rating_18" disabled="disabled" type="radio">
<input value="42" name="lifestyle_inventory[lifestyle_submissions_attributes][50][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_lifestyle_question_id_42" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][50][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_rating_25" disabled="disabled" type="radio">
<input value="42" name="lifestyle_inventory[lifestyle_submissions_attributes][50][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_50_lifestyle_question_id_42" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week have you engaged in practices that help calm the mind, such as mindful movement (yoga, crafts, sports) or intentional stillness and silence in some form?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][51][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_rating_0" disabled="disabled" type="radio">
<input value="43" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][51][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_lifestyle_question_id_43" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][51][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_rating_6" disabled="disabled" type="radio">
<input value="43" name="lifestyle_inventory[lifestyle_submissions_attributes][51][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_lifestyle_question_id_43" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][51][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_rating_12" disabled="disabled" type="radio">
<input value="43" name="lifestyle_inventory[lifestyle_submissions_attributes][51][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_lifestyle_question_id_43" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][51][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_rating_18" disabled="disabled" type="radio">
<input value="43" name="lifestyle_inventory[lifestyle_submissions_attributes][51][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_lifestyle_question_id_43" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][51][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_rating_25" disabled="disabled" type="radio">
<input value="43" name="lifestyle_inventory[lifestyle_submissions_attributes][51][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_51_lifestyle_question_id_43" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper">
<div class="left-side">How often this week have you slipped into autopilot and not been fully aware of the decisions you were making?</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][52][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_rating_25" disabled="disabled" type="radio">
<input value="44" name="lifestyle_inventory[lifestyle_submissions_attributes][52][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_lifestyle_question_id_44" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][52][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_rating_18" disabled="disabled" type="radio">
<input value="44" name="lifestyle_inventory[lifestyle_submissions_attributes][52][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_lifestyle_question_id_44" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][52][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_rating_12" disabled="disabled" type="radio">
<input value="44" name="lifestyle_inventory[lifestyle_submissions_attributes][52][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_lifestyle_question_id_44" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][52][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_rating_6" disabled="disabled" type="radio">
<input value="44" name="lifestyle_inventory[lifestyle_submissions_attributes][52][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_lifestyle_question_id_44" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][52][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_rating_0" disabled="disabled" type="radio">
<input value="44" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][52][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_52_lifestyle_question_id_44" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
<div class="fields">
<div class="survey-question-wrapper grayed">
<div class="left-side">How often this week have you felt consumed with repeated, negative thoughts? (aka, “rumination”)</div>
<div class="right-side">
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="25" name="lifestyle_inventory[lifestyle_submissions_attributes][53][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_rating_25" disabled="disabled" type="radio">
<input value="45" name="lifestyle_inventory[lifestyle_submissions_attributes][53][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_lifestyle_question_id_45" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="18" name="lifestyle_inventory[lifestyle_submissions_attributes][53][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_rating_18" disabled="disabled" type="radio">
<input value="45" name="lifestyle_inventory[lifestyle_submissions_attributes][53][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_lifestyle_question_id_45" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="12" name="lifestyle_inventory[lifestyle_submissions_attributes][53][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_rating_12" disabled="disabled" type="radio">
<input value="45" name="lifestyle_inventory[lifestyle_submissions_attributes][53][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_lifestyle_question_id_45" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="6" name="lifestyle_inventory[lifestyle_submissions_attributes][53][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_rating_6" disabled="disabled" type="radio">
<input value="45" name="lifestyle_inventory[lifestyle_submissions_attributes][53][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_lifestyle_question_id_45" disabled="disabled" type="radio">
</div>
</div>
<div class="radio_btn">
<div class="checked-false">
<div class="checked-true-inner">
<img src="/assets/lessons/check_white-a04aeeed7b80eced95f2227a4911abe464d2c3b48940e3b19e4456b0c2da435c.svg" alt="Check white">
</div>
</div>
<div class="hidden">
<input value="0" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][53][rating]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_rating_0" disabled="disabled" type="radio">
<input value="45" checked="checked" name="lifestyle_inventory[lifestyle_submissions_attributes][53][lifestyle_question_id]" id="lifestyle_inventory_lifestyle_submissions_attributes_53_lifestyle_question_id_45" disabled="disabled" type="radio">
</div>
</div>
</div>
</div>
</div>
</div>
</span>
</div>
</div>
<div class="form-body-subheader mar-bot10">
<div class="switch_question" data-q-type="xtra">Not sure exactly? Answer a few questions to find out.</div>
</div>
<div class="mar-top20 clearfix mar-bot10">
<div class="button btn-hollow pull-left back">Previous</div>
<input name="commit" value="Submit" class="button btn-blue pull-right" data-disable-with="Submitting..." type="submit">
</div>
</div>