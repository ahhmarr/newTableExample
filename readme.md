#Table Search

Basic Searchable Table Using Vanilla JavaScript

##Usage

add the following style rules in you stylesheet &
import images up.png and down.png to your images folder

```
.match{
			background-color: rgba(15,223,0,.3);
		}
		.sort-column > img{
			height:10px;
			display:none;
		}
		.sort-column[data-order="1"] > img[src$="down.png"]{
			display: inline;
		} 
		.sort-column[data-order="-1"] > img[src$="up.png"]{
			display: inline;
		}
```
you can change the data source by modifying the details variable in app.js

add following markup in you html page
```
	<input type="text" id="search-text">
	<div id="table-wrapper"></div>
```
###You can add your own styling to the table 