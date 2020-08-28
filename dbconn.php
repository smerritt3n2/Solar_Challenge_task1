<?php
    /*========================================================================================
     * This Program is used to check that the database is connected when using the web-page
     ========================================================================================*/
    $con=mysqli_connect("localhost", "root", "", "EcarList");
    // checks connections
    if (mysqli_connect_errno())
        {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }

?>