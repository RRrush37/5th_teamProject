<?php
function countTimeDiff($time)
{
    $date = new DateTime();
    $date->modify('+6 hours');
    $date2 = DateTime::createFromFormat('Y-m-d H:i:s', $time);
    $diff = $date2->diff($date);

    if ($diff->y) {
        return $diff->y . "年前發佈";
    } else if ($diff->m) {
        return $diff->m . "月前發佈";
    } else if ($diff->d) {
        return $diff->d . "天前發佈";
    } else if ($diff->h) {
        return $diff->h . "小時前發佈";
    } else if ($diff->i) {
        return $diff->i . "分鐘前發佈";
    } else if ($diff->s) {
        return $diff->s . "秒前發佈";
    } else
        return "0秒前發佈";
}
