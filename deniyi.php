<?php 
// Get the search variable from URL
$var = $_POST['profession']­;
//trim whitespace from the stored variable

// rows to return
$limit=15;

// check for an empty string and display a message.
if ($var == "")
{
echo "<p>Please enter a search...</p>";
exit;
}

// check for a search parameter
if (!isset($var))
{
echo "<p>We dont seem to have a search parameter!</p>";
exit;
}

//connect to your database * EDIT REQUIRED HERE *
mysql_connect("local­host","prosbotc_memb­ers","notebook8a1c")­; //(host, username, password)

//specify database * EDIT REQUIRED HERE *
mysql_select_db("pro­sbotc_list") or die("Unable to select database"); //select which database we're using
// Build SQL Query
$s = (isset($_GET['s']))?­ $_GET['s']:0;
$query = "select * from members where profession like \"$var\" ORDER BY RAND() "; // EDIT HERE and specify your table and field names for the SQL query

$numresults=mysql_qu­ery($query);
$numrows=mysql_num_r­ows($numresults);

// If we have no results, offer a google search as an alternative

if ($numrows == 0)
{
echo "<h4>Results</h4>";
echo "<p>Sorry, your search: &quot;" . $trimmed . "&quot; returned zero results, please search again and try to change the scope of your query</p>";
echo"<a href = 'search.php'>CONTINU­E SEARCH HERE</A>";


}

// next determine if s has been passed to script, if not use 0
$s = (isset($_GET['s']))?­ $_GET['s']:0;

// get results
$query .= " limit $s,$limit";
$result = mysql_query($query) or die("Couldn't execute query");

// display what the person searched for
echo "<p>You searched for: &quot;" . $var . "&quot;</p>";

// begin to show results set


$count = 1 + $s ;

// now you can display the results returned
while ($row= mysql_fetch_array($r­esult))
{
$email = $row["email"];
$name =$row['name'];
$gender =$row['gender'];
$profession = $row['profession'];
$pics = $row['pics'];
echo "<br>";

echo "<br>";
echo "<br>";
$num = "($count&nbsp)";
echo $num;
?>
<img src= "<?php echo $pics; ?>" width="70" height="70" /><br />
<b>Name</­b>::<b><font color="#009933"> <?php echo $name ?></font></b><br />
<?php
echo "<p>";
echo "<a href='profile.php?id­=" . $email . "'> "."".""." View $name's profile </a><br>";


}
?>