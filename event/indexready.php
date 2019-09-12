<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package gotoevent
 */

get_header();
?>

    <div id="primary" class="content-area">
        <main id="main" class="site-main">
            <section class="top_content">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <form action="" method="post">
                    <input type="text" name="textfield" placeholder="Я хочу знайти . . .">
                    <input type="button" name="button" value="Пошук">
                </form>
                <a href="http://misto2.satellit.com.ua/?page_id=52" class="todays_events">Події на завтра</a>
            </div>
        </div>
    </div>
</section>
            <div class="container">
                <div class="row">


    <?php echo do_shortcode('[events_list_grouped mode="monthly" limit=9 pagination=1]<div class="col-md-4 col-sm-6">
               <article>
                <div class="post_wrapper">
                    <figure>
                        #_EVENTIMAGE
                    </figure>
                    <div class="post_descr">
                       <span class="event_date">#_EVENTDATES </span>
                        <span class="event_cat">#_CATEGORYLINK</span>
                     <h2 class="post_link">  #_EVENTLINK</h2>
                        <p class="post_text">
                            #_EVENTEXCERPT{15,...}
                        </p>
                        <span class="event_location"> <i class="fas fa-map-marker-alt"></i> #_LOCATIONNAME</span>
                    </div>

                   <div class="reed_more" >#_EVENTLINK </div>
                </div>
                </article>
            </div>
[/events_list_grouped]'); ?>
                </div>
            </div>
        </main>
    </div>


<li><p>#_EVENTLINK - #_EVENTDATES - #_EVENTTIMES</p></li>

<div style="float:right; margin:0px 0px 15px 15px;">#_LOCATIONMAP</div>
<p>
    <strong>Address</strong><br/>
    #_LOCATIONADDRESS<br/>
    #_LOCATIONTOWN<br/>
    #_LOCATIONSTATE<br/>
    #_LOCATIONREGION<br/>
    #_LOCATIONPOSTCODE<br/>
    #_LOCATIONCOUNTRY
</p>
<br style="clear:both" />
#_LOCATIONNOTES

<h3>Upcoming Events</h3>
<p>#_LOCATIONNEXTEVENTS</p>

<?php

get_footer();
