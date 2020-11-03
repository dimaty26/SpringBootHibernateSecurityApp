/**
 *
 */
$(document).ready(function(){

    $('.table .eBtn').on('click', function(event) {
        event.preventDefault();
        var href = $(this).attr('href');

        $.get(href, function(user) {
            $('#id').val(user.id);
            $('#first-name').val(user.firstName);
            $('#last-name').val(user.lastName);
            $('#email').val(user.email);
            $('#password').val(user.password);
        });

        $('#editModal').modal();
        $(".modal-backdrop").remove();
    });

    // $('.btn-delete').on('click', function (e) {
    //     e.preventDefault();
    //     var href =$(this).attr('href');
    //     $('#myModal #btnDeleteYes').attr('href',href);
    //     $('#myModal').modal();
    // });
});