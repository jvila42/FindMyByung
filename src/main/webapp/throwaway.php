<?php
$lastArticleId  = 0;
$isNewArticle   = false;
while($row = mysqli_fetch_array($query)) {
    $isNewArticle = ($lastArticleId != $row['article_id']) ? true : false;
    if($isNewArticle) {
        $lastArticleId = $row['article_id']; ?>
        <div class="article">
            <header>
                <hgroup>
                    <h2><?php echo $row['title']; ?></h2>
                    <h4>Posted on <?php echo $row['publicationDate']; ?></h4>
                </hgroup>
            </header>
            <p><?php echo $row['content']; ?></p>
        </div>
<?php
    }
    if($row['comment'] != '') { ?>
        <p><strong><?php echo $row['author']; ?></strong> - <?php echo $row['comment']; ?></p>
<?php
    } ?>
<?php
} ?>