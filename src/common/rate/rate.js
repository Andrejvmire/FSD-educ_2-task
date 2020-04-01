$('.rate').each(
    function () {
        let star = (item, index) => (
            $(this).data('stars') < index + 1
                ?
                $(document.createElement('span'))
                    .addClass('star star__bordered')
                :
                $(document.createElement('span'))
                    .addClass('star star__filled')
        )
        $(this)
            .append(
                (new Array(5))
                    .fill()
                    .map(
                        star
                    )
            )
    }
)