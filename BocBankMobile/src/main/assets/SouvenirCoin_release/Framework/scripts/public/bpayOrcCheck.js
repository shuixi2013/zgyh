/*! BUILD: 2016-12-19 */
define("bpayOrcCheck",["common","algorit"],function(a,b){var c={};return c.check=function(a){var c=a.billerCode;if("20040001"==c){var d=a.billerRef3;return b.Algo_KK_Hospital_NRICNo(d)}return!0},c});