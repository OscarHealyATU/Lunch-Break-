<?php
//code copied from youtube tutorial
// https://www.youtube.com/watch?v=JaRq73y5MJk
// code is explained throughout tutorial howver i have made an error i coouldnt figure out
// supposedly its easier to carry out file upload in php 
// error code is 405
if (isset($_POST['submit'])) {
    $file = $_FILES['file'];
    echo
    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileSize  = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];
    

    $fileExt = explode('.', $fileName);
    $fileRealExt = strtolower(end($fileExt));

    $allowed = array('jpg','jpeg','png','webp','gif');

    if (in_array($fileRealExt, $allowed)) {
        if ($fileError === 0) {
            
                $fileNameNew = uniqid(' ',true).".".$fileRealExt;
                $fileDest = 'uploads/'.$fileNameNew;
                move_uploaded_file($fileTmpName,$fileDest);
                header("/upload.php?Success");
        }else {
            echo "there was an error uploading file"
        }
    }else{
        echo "you cannot upload files of this type";    
    }
}
?>