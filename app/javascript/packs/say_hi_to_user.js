import $ from 'jquery';
import {say_hi} from "./say_hi";

function say_hi_to_user(last_name, first_name) {
  say_hi(last_name + " " + first_name);
}

$(document).ready(function(){
  $('button#say-hi-to-user').on('click', function(){
    say_hi_to_user('Ivanov', 'Ivan');
  });
});
