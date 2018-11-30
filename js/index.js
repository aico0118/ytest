let header = '<div class="align-items-center d-flex">\
<svg class="mx-3 switch-menu" xmlns="ht' +
        'tp://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30"\
    focusa' +
        'ble="false">\
    <title>Menu</title>\
    <path stroke="currentColor" stroke-wi' +
        'dth="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22' +
        '"></path>\
</svg>\
<div class="header-img d-none d-lg-block mr-2"></div>\
<div c' +
        'lass="header-img-xs d-block d-lg-none"></div>\
<span class="sub-title pr-2">模具保養' +
        '管理系統</span>\
</div>\
<div class="d-block d-lg-none align-items-center"><span> <i class="far fa-user pr-1">\
</i>adm' +
        'in000123</span></div> \
<div class="user-info d-flex align-items-center">\
<span' +
        ' class="px-1 d-lg-inline d-none"><i class="fa-building far pr-1"></i>古德汽車模具供應</s' +
        'pan>\
<span class="px-1 d-lg-inline d-none can-click" data-toggle="dropdown" id=' +
        '"user" data-offset="10,11">\
    <i class="far fa-user pr-1">\
    </i><span>系統管' +
        '理員\
        admin000123</span>\
</span>\
<div class="dropdown-menu user-menu" ar' +
        'ia-labelledby="dLabel">\
    <a class="dropdown-item" href="#" onclick="window.l' +
        'ocation.href=\'../0_主畫面功能/0_1_edit.html\';">基本資料維護</a>\
    <a class="dropdown-i' +
        'tem" href="#" onclick="window.location.href=\'../0_主畫面功能/0_2_edit.html\';">修改密碼</a>\
</div>\
<button type="button" class="btn btn-outline-sec' +
        'ondary mx-2  d-lg-inline d-none" onclick="window.location.href=\'../login.html\'' +
        ';">登出</button>\
<span><i class="far fa-question-circle text-right ml-2 info"></i' +
        '></span>\
        <div class="modal" id="common-modal-dialog" tabindex="-1" role' +
        '="dialog">\
  <div class="modal-dialog modal-dialog-centered" role="document">\
' +
        '        </div>\
        </div>\
</div>';

let menu = '<div class="input-group my-3">\
<input type="text" class="form-control border-0"' +
        ' placeholder="搜尋......" aria-describedby="basic-addon2">\
<div class="input-grou' +
        'p-append border-0">\
    <span class=" input-group-text bg-white border-0" id="b' +
        'asic-addon2"><i class="fas fa-search"></i></span>\
</div>\
</div>\
<ul class="fl' +
        'ex-column mb-2 nav pb-2 text-center user-info-xs d-block d-lg-none">\
<li class=' +
        '"nav-item">\
    <span class="active nav-link"><i class="fa-building far"></i>　古' +
        '德汽車模具供應</span>\
</li>\
<li class="nav-item" data-toggle="collapse" data-target="' +
        '#user-menu-xs" aria-controls="user-menu-xs">\
    <span class="nav-link"><i clas' +
        's="far fa-user"></i>　系統管理員 admin000123　<i class="fas fa-caret-down"></i></span>' +
        '\
</li>\
<div id="user-menu-xs" class="collapse">\
    <ul class="\
        nav ' +
        'flex-column text-center text-md-left pb-3 pl-4">\
        <li class="nav-item" o' +
        'nclick="window.location.href=\'../0_主畫面功能/0_1_edit.html\';">\
            <span ' +
        'class="nav-link">基本資料維護\
            </span>\
        </li>\
        <li class="' +
        'nav-item" onclick="window.location.href=\'../0_主畫面功能/0_2_edit.html\';">\
            <span class="nav-link">修改密碼\
            </span>\
      ' +
        '  </li>\
    </ul>\
</div>\
<li>\
    <button type="button" class="btn btn-outli' +
        'ne-secondary btn-block" onclick="window.location.href=\'../login.html\';">登出</bu' +
        'tton>\
</li>\
</ul>\
<ul class="menu-list px-2">\
<li class="menu-parent can-cli' +
        'ck"> <span class="active" data-toggle="collapse" data-target="#collapse2"\
     ' +
        '   aria-expanded="false" aria-controls="collapse2"><i class="fas fa-cog pr-2"></' +
        'i>2_基本資料\
    </span>\
    <div id="collapse2" class="collapse">\
        <ul cl' +
        'ass="\
      nav flex-column text-center text-md-left pb-3 pl-4">\
            <' +
        'li class="nav-item" onclick="window.location.href=\'../2_基本資料/2_1_query.html\';"' +
        ' data-function-id="2-1">\
                <span class="nav-link">2-1 系統參數設定\
   ' +
        '             </span>\
            </li>\
            <li class="nav-item" onclic' +
        'k="window.location.href=\'../2_基本資料/2_2_query.html\';" data-function-id="2-2">\
' +
        '                <span class="nav-link">2-2 自動調整保養頻率設定\
                </span>\
' +
        '            </li>\
            <li class="nav-item" onclick="window.location.hre' +
        'f=\'../2_基本資料/2_4_query.html\';" data-function-id="2-4">\
                <span ' +
        'class="nav-link">2-4 分級設定\
                </span>\
            </li>\
         ' +
        '   <li class="nav-item" onclick="window.location.href=\'../2_基本資料/2_5_query.html' +
        '\';" data-function-id="2-5">\
                <span class="nav-link">2-5 部品資料設定<' +
        '/span>\
            </li>\
            <li class="nav-item" onclick="window.loca' +
        'tion.href=\'../2_基本資料/2_6_query.html\';" data-function-id="2-6">\
              ' +
        '  <span class="nav-link">2-6 保養項目設定</span>\
            </li>\
            <li c' +
        'lass="nav-item" onclick="window.location.href=\'../2_基本資料/2_7_query.html\';" dat' +
        'a-function-id="2-7">\
                <span class="nav-link">2-7 下拉式選單參數設定\
    ' +
        '            </span>\
            </li>\
            <li class="nav-item" onclick' +
        '="window.location.href=\'../2_基本資料/2_8_query.html\';" data-function-id="2-8">\
 ' +
        '               <span class="nav-link">2-8 公司語系設定</span>\
            </li>\
    ' +
        '        <li class="nav-item" onclick="window.location.href=\'../2_基本資料/2_9_query' +
        '.html\';" data-function-id="2-9">\
                <span class="nav-link">2-9 多公' +
        '司設定\
                </span>\
            </li>\
            <li class="nav-item' +
        '" onclick="window.location.href=\'../2_基本資料/2_10_query.html\';" data-function-id' +
        '="2-10">\
                <span class="nav-link">2-10 部門設定\
                </sp' +
        'an>\
            </li>\
            <li class="nav-item" onclick="window.locatio' +
        'n.href=\'../2_基本資料/2_11_query.html\';" data-function-id="2-11">\
               ' +
        '     <span class="nav-link">2-11 部品工程設定\
                    </span>\
          ' +
        '      </li>\
        </ul>\
    </div>\
</li>\
<li class="menu-parent can-click"' +
        '>\
    <span class="active" data-toggle="collapse" data-target="#collapse3" aria' +
        '-controls="collapse3">\
        <i class="far fa-user-circle pr-2"></i>3_系統管理\
 ' +
        '   </span>\
    <div id="collapse3" class="collapse">\
        <ul class="\
    ' +
        '        nav flex-column text-center text-md-left pb-3 pl-4">\
            <li cl' +
        'ass="nav-item" onclick="window.location.href=\'../3_系統管理/3_1_query.html\';" data' +
        '-function-id="3-1">\
                <span class="nav-link">3-1 使用者帳號管理\
       ' +
        '         </span>\
            </li>\
            <li class="nav-item" onclick="w' +
        'indow.location.href=\'../3_系統管理/3_2_query.html\';" data-function-id="3-2">\
    ' +
        '            <span class="nav-link">3-2 群組管理\
                </span>\
          ' +
        '  </li>\
            <li class="nav-item" onclick="window.location.href=\'../3_系' +
        '統管理/3_3_query.html\';" data-function-id="3-3">\
                <span class="nav' +
        '-link">3-3 模組功能管理\
                </span>\
            </li>\
            <li c' +
        'lass="nav-item" onclick="window.location.href=\'../3_系統管理/3_4_query.html\';" dat' +
        'a-function-id="3-4">\
                    <span class="nav-link">3-4 系統記錄查詢\
   ' +
        '                 </span>\
                </li>\
        </ul>\
    </div>\
</li' +
        '>\
<li class="menu-parent can-click">\
    <span class="active" data-toggle="col' +
        'lapse" data-target="#collapse4" aria-controls="collapse4">\
        <i class="fa' +
        'r fa-calendar-check pr-2"></i>4_每日維護\
    </span>\
    <div id="collapse4" class' +
        '="collapse">\
        <ul class="\
      nav flex-column text-center text-md-lef' +
        't pb-3 pl-4">\
            <li class="nav-item" onclick="window.location.href=\'' +
        '../4_每日維護/4_1_query.html\';" data-function-id="4-1">\
                <span clas' +
        's="nav-link active">4-1 生產實績\
                </span>\
            </li>\
      ' +
        '      <li class="nav-item" onclick="window.location.href=\'../4_每日維護/4_2_query.h' +
        'tml\';" data-function-id="4-2">\
                <span class="nav-link">4-2 保養計劃' +
        '表\
                </span>\
            </li>\
            <li class="nav-item" ' +
        'onclick="window.location.href=\'../4_每日維護/4_3_query.html\';" data-function-id="4' +
        '-3">\
                <span class="nav-link">4-3 外觀不良清單\
                </span>' +
        '\
            </li>\
        </ul>\
    </div>\
</li>\
<li class="menu-parent ca' +
        'n-click">\
    <span class="active" data-toggle="collapse" data-target="#collaps' +
        'e5" aria-controls="collapse5">\
        <i class="fas fa-search pr-2"></i>5_查詢報表' +
        '\
    </span>\
    <div id="collapse5" class="collapse">\
        <ul class="\
 ' +
        '       nav flex-column text-center text-md-left pb-3 pl-4">\
            <li cla' +
        'ss="nav-item" onclick="window.location.href=\'../5_查詢報表/5_1_query.html\';" data-' +
        'function-id="5-1">\
                <span class="nav-link active">5-1 點修履歷查詢\
  ' +
        '              </span>\
            </li>\
            <li class="nav-item" oncli' +
        'ck="window.location.href=\'../5_查詢報表/5_2_query.html\';" data-function-id="5-2">' +
        '\
                <span class="nav-link">5-2 變異趨勢查詢\
                </span>\
  ' +
        '          </li>\
            <li class="nav-item" onclick="window.location.href=' +
        '\'../5_查詢報表/5_3_query.html\';" data-function-id="5-3">\
                <span cl' +
        'ass="nav-link">5-3 模具DPU排名\
                </span>\
            </li>\
        ' +
        '    <li class="nav-item" onclick="window.location.href=\'../5_查詢報表/5_4_query.htm' +
        'l\';" data-function-id="5-4">\
                <span class="nav-link">5-4 外觀不良查詢' +
        '\
                </span>\
            </li>\
        </ul>\
    </div>\
</li>\
' +
        '<li class="menu-parent can-click">\
    <span class="active" data-toggle="collap' +
        'se" data-target="#collapse7" aria-controls="collapse7">\
        <i class="fas f' +
        'a-toolbox pr-2"></i>7_評價功能\
    </span>\
    <div id="collapse7" class="collapse' +
        '">\
        <ul class="\
                nav flex-column text-center text-md-lef' +
        't pb-3 pl-4">\
            <li class="nav-item" onclick="window.location.href=\'' +
        '../7_評價功能/7_1_query.html\';" data-function-id="7-1">\
                <span clas' +
        's="nav-link">7-1 技能人員評價標準維護</span>\
            </li>\
            <li class="na' +
        'v-item" onclick="window.location.href=\'../7_評價功能/7_2_query.html\';" data-functi' +
        'on-id="7-2">\
                <span class="nav-link">7-2 模修人員技能評價\
             ' +
        '   </span>\
            </li>\
        </ul>\
    </div>\
</li>\
</ul>';

function switchMenu(isOpen) {
    if (isOpen && $('.menu').hasClass('d-none')) {
        $('.menu').removeClass('d-none');
        $('.main').removeClass('col-12');
        $('.main').addClass('col-lg-9');
        $('.main').addClass('col-xl-10');
    }
    if (!isOpen && !$('.menu').hasClass('d-none')) {
        $('.menu').addClass('d-none');
        $('.main').removeClass('col-lg-9');
        $('.main').removeClass('col-xl-10');
        $('.main').addClass('col-12');
    }
}

function changeItem(itemName, itemCode, table, form) {
    let prevName = $(table).attr('currentItemName');
    let prevCode = $(table).attr('currentItemCode');
    if (!prevName) 
        prevName = '';
    if (!prevCode) 
        prevCode = '';
    $
        .each($(table).find('td'), function (key, value) {
            $(value).html($(value).html().replace(prevName, itemName));
        })
    $.each($(table).find('th'), function (key, value) {
        $(value).html($(value).html().replace(prevCode, itemCode));
    })

    $.each($(form).find('input'), function (key, value) {

        $(value).val($(value).val().replace(prevName, itemName));
        $(value).val($(value).val().replace(prevCode, itemCode));
    });
    $(table).attr('currentItemName', itemName);
    $(table).attr('currentItemCode', itemCode);

}

function getBreadCrumbHtml(cureentMenuItem) {
    let breadCrumbHtml = '';
    let currentPageMode = $('.function-title').data('page-mode');
    breadCrumbHtml += '<span class="breadcrumb-item">' + $(cureentMenuItem)
        .parents('.menu-parent')
        .find('span')
        .html()
        .replace($(cureentMenuItem).parents('.menu-parent').find('i').html(), '') + '</span>';
    breadCrumbHtml += '<span class="breadcrumb-item">' + $(cureentMenuItem)
        .find('span')
        .html() + '</span>';
    breadCrumbHtml += '<span class="breadcrumb-item focus">' + currentPageMode + '</span>';
    breadCrumbHtml = '<span>' + breadCrumbHtml + '</span>';
    return breadCrumbHtml;
}

$('.check-all')
    .change(function (e) {
        $(e.target)
            .parents('table')
            .find('[type="checkbox"]')
            .attr("checked", $(e.target).is(":checked"));
        $(e.target)
            .parents('table')
            .find('[type="checkbox"]')
            .prop('checked', $(e.target).is(":checked"));
    })

$(window).resize(function (e) {
    if ($(document).innerWidth() < 992) {
        switchMenu(false);
    }
})

$(document).ready(function () {
    $('.menu').html(menu);
    $('.header').html(header);
    let currentFunctionId = $('.function-title').data('function-id');
    if (currentFunctionId) {
        let cureentMenuItem = $('.menu-list').find('[data-function-id="' + currentFunctionId + '"]');
        $(cureentMenuItem).addClass('focus');
        $(cureentMenuItem)
            .parents('.collapse')
            .addClass('show');
        let breadCrumbHtml = getBreadCrumbHtml(cureentMenuItem);
        $('.function-title').html(breadCrumbHtml);
    }
    $('.switch-menu')
        .click(function () {
            if ($('.menu').hasClass('d-none')) {
                switchMenu(true);
            } else {
                switchMenu(false);
            }
        });
    $('.header-img').click(rtnToIndex);
    $('.header-img-xs').click(rtnToIndex);
    $('.table-click tbody tr').click(function () {
        $('.tr-selected').removeClass('tr-selected');
        $(this).addClass('tr-selected');
    })
    $('.datepicker').datepicker({
        dateFormat: 'yy/mm/dd',
        'showOn': 'button',
        beforeShow: function (input, inst) {
            inst
                .dpDiv
                .css({
                    marginLeft: 'calc(' + input.offsetWidth + 'px - 17em)'
                });
        }
    });
    $('.btn-datepicker').click(function (e) {
        $(this)
            .parent()
            .parent()
            .find('.ui-datepicker-trigger')
            .click();
    });
    $('div').scroll(function () {
        $('#ui-datepicker-div').hide();
    });
});

function rtnToIndex() {
    window.location.href = '../index.html';
}

function showMsg(type, title, messsge, confirmEvent) {
    let keyword = type;
    if (keyword === 'success-confirm') {
        keyword = 'success';
    }
    let msgHtml = '<div class="modal-content">\
      <div class="modal-header">\
        <h5 class' +
            '="modal-title">' + title + '</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close' +
            '">\
          <span aria-hidden="true">&times;</span>\
        </button>\
      ' +
            '</div>\
      <div class="modal-body"> <p>' + messsge + '</p></div>';
    if (type === 'success-confirm') {
        msgHtml += '<div class="modal-footer">\
        <button type="button" class="btn btn-' + keyword + '" data-dismiss="modal">取消</button>\
        <button type="button" class="btn-con' +
                'firm btn btn-primary">確定</button>\
      </div>';
    } else {
        msgHtml += '<div class="modal-footer">\
        <button type="button" class="btn btn-' + keyword + '" data-dismiss="modal">確定</button>\
      </div>';
    }

    msgHtml += '</div>';
    $('#common-modal-dialog')
        .find('.modal-dialog')
        .html(msgHtml);
    $('#common-modal-dialog').modal('show');
    $('#common-modal-dialog')
        .find('.btn-confirm')
        .on('click', function () {
            $('#common-modal-dialog').modal('hide');
            confirmEvent();
        });
}