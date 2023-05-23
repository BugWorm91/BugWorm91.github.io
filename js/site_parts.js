window.addEventListener('DOMContentLoaded', function(){
    let hierarchyStr = createPathHierarchy();
    fetchInnerHTML(hierarchyStr + 'parts/header.txt', 'site_header');
    fetchInnerHTML(hierarchyStr + 'parts/footer.txt', 'site_footer');
});
