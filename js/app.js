// console.log("yo")

var app = angular.module('ap-valuation-v1.0', ['ngMaterial', 'ngAnimate', 'ngAria']);
app.controller("mainController", ['$scope', '$timeout', function($scope, $timeout){

  $scope.input = {
    plate : '',
    plateType : '',
    plateIssued : '',
    originalPrice : ''
  }

  $scope.regTypes = ['Current', 'Prefix', 'Suffix', 'Dateless'];
  $scope.selectedRegType;
  $scope.selectedRegYear;
  $scope.regYear;

  $scope.getSelectedTextForRegType = function() {
    if ($scope.selectedRegType !== undefined) {
      $scope.input.plateType = $scope.selectedRegType;
      return "Selected: " + $scope.selectedRegType;
    } else {
      return "Please select an registration type";
    }
  };

  $scope.regYears = {
    current: [
      '51 - (1 Sep 2001 to 28 Feb 2002)',
      '02 - (1 Mar 2002 to 31 Aug 2002)',
      '52 - (1 Sep 2002 to 28 Feb 2003)',
      '03 - (1 Mar 2003 to 31 Aug 2003)',
      '53 - (1 Sep 2003 to 28 Feb 2004)',
      '04 - (1 Mar 2004 to 31 Aug 2004)',
      '54 - (1 Sep 2004 to 28 Feb 2005)',
      '05 - (1 Mar 2005 to 31 Aug 2005)',
      '55 - (1 Sep 2005 to 28 Feb 2006)',
      '06 - (1 Mar 2006 to 31 Aug 2006)',
      '56 - (1 Sep 2006 to 28 Feb 2007)',
      '07 - (1 Mar 2007 to 31 Aug 2007)',
      '57 - (1 Sep 2007 to 28 Feb 2008)',
      '08 - (1 Mar 2008 to 31 Aug 2008)',
      '58 - (1 Sep 2008 to 28 Feb 2009)',
      '09 - (1 Mar 2009 to 31 Aug 2009)',
      '59 - (1 Sep 2009 to 28 Feb 2010)',
      '10 - (1 Mar 2010 to 31 Aug 2010)',
      '60 - (1 Sep 2010 to 28 Feb 2011)',
      '11 - (1 Mar 2011 to 31 Aug 2011)',
      '61 - (1 Sep 2011 to 28 Feb 2012)',
      '12 - (1 Mar 2012 to 31 Aug 2012)',
      '62 - (1 Sep 2012 to 28 Feb 2013)',
      '13 - (1 Mar 2013 to 31 Aug 2013)',
      '63 - (1 Sep 2013 to 28 Feb 2014)',
      '14 - (1 Mar 2014 to 31 Aug 2014)',
      '64 - (1 Sep 2014 to 28 Feb 2015)',
      '15 - (1 Mar 2015 to 31 Aug 2015)',
      '65 - (1 Sep 2015 to 28 Feb 2016)',
      '16 - (1 Mar 2016 to 31 Aug 2016)',
      '66 - (1 Sep 2016 to 28 Feb 2017)',
      '17 - (1 Mar 2017 to 31 Aug 2017)',
      '67 - (1 Sep 2017 to 28 Feb 2018)',
      '18 - (1 Mar 2018 to 31 Aug 2018)',
      '68 - (1 Sep 2018 to 28 Feb 2019)'
    ],
    prefix: [
      'A - (1 Aug 1983 to 31 Jul 1984)',
      'B - (1 Aug 1984 to 31 Jul 1985)',
      'C - (1 Aug 1985 to 31 Jul 1986)',
      'D - (1 Aug 1986 to 31 Jul 1987)',
      'E - (1 Aug 1987 to 31 Jul 1988)',
      'F - (1 Aug 1988 to 31 Jul 1989)',
      'G - (1 Aug 1989 to 31 Jul 1990)',
      'H - (1 Aug 1990 to 31 Jul 1991)',
      'J - (1 Aug 1991 to 31 Jul 1992)',
      'K - (1 Aug 1992 to 31 Jul 1993)',
      'L - (1 Aug 1993 to 31 Jul 1994)',
      'M - (1 Aug 1994 to 31 Jul 1995)',
      'N - (1 Aug 1995 to 31 Jul 1996)',
      'P - (1 Aug 1996 to 31 Jul 1997)',
      'R - (1 Aug 1997 to 31 Jul 1998)',
      'S - (1 Aug 1998 to 28 Feb 1999)',
      'T - (1 Mar 1999 to 31 Jul 1999)',
      'V - (1 Aug 1999 to 28 Feb 2000)',
      'W - (1 Mar 2001 to 31 Jul 2000)',
      'X - (1 Aug 2000 to 28 Feb 2001)',
      'Y - (1 Mar 2001 to 31 Aug 2001)'
    ],
    suffix: [
      'A - (1 Feb 1963 to 31 Dec 1963)',
      'B - (1 Feb 1964 to 31 Dec 1964)',
      'C - (1 Feb 1965 to 31 Dec 1965)',
      'D - (1 Jan 1966 to 31 Dec 1966)',
      'E - (1 Jan 1967 to 31 Jul 1967)',
      'F - (1 Aug 1967 to 31 Jul 1968)',
      'G - (1 Aug 1968 to 31 Jul 1969)',
      'H - (1 Aug 1969 to 31 Jul 1970)',
      'J - (1 Aug 1970 to 31 Jul 1971)',
      'K - (1 Aug 1971 to 31 Jul 1972)',
      'L - (1 Aug 1972 to 31 Jul 1973)',
      'M - (1 Aug 1973 to 31 Jul 1974)',
      'N - (1 Aug 1974 to 31 Jul 1975)',
      'P - (1 Aug 1975 to 31 Jul 1976)',
      'R - (1 Aug 1976 to 31 Jul 1977)',
      'S - (1 Aug 1977 to 31 Jul 1978)',
      'T - (1 Aug 1978 to 31 Jul 1979)',
      'V - (1 Aug 1979 to 31 Jul 1980)',
      'W - (1 Aug 1980 to 31 Jul 1981)',
      'X - (1 Aug 1981 to 31 Jul 1982)',
      'Y - (1 Aug 1982 to 31 Jul 1983)'
    ],
    dateless: [
      'Dateless 1 Number',
      'Dateless 2 Numbers',
      'Dateless 3 Numbers'
    ]
  }

  $scope.currentDate = new Date().getFullYear();

  $scope.showRegType = function(){
    console.log($scope.selectedRegType);

    switch($scope.selectedRegType){
      case 'Current':
        $scope.myPlateIsCurrent = true;
        $scope.myPlateIsPrefix = false;
        $scope.myPlateIsSuffix = false;
        $scope.myPlateIsDateless = false;
        break;
      case 'Prefix':
        $scope.myPlateIsPrefix = true;
        $scope.myPlateIsCurrent = false;
        $scope.myPlateIsSuffix = false;
        $scope.myPlateIsDateless = false;
        break;
      case 'Suffix':
        $scope.myPlateIsSuffix = true;
        $scope.myPlateIsDateless = false;
        $scope.myPlateIsPrefix = false;
        $scope.myPlateIsCurrent = false;
        break;
      case 'Dateless':
        $scope.myPlateIsDateless = true;
        $scope.myPlateIsCurrent = false;
        $scope.myPlateIsPrefix = false;
        $scope.myPlateIsSuffix = false;
    }
  }

  $scope.plateFormula = function(){

    console.log("Reg Year: ", $scope.selectedRegYear);
    var a = $scope.selectedRegYear;
    var b = a.replace(/\s/g,'');
    var c;

    if (b.length == 23) {
      c = b.substring(11, 7);
    } else if (b.length == 24) {
      c = b.substring(12, 8);
    } else {
      c = $scope.selectedRegYear;
    }

    $scope.input.plateIssued = c;

    console.log(b);
    console.log(c);

      switch($scope.input.plateType){
        case 'Current':
          $scope.percentageIncrease = 0.03;
          break;
        case 'Prefix':
          $scope.percentageIncrease = 0.05;
          break;
        case 'Suffix':
          $scope.percentageIncrease = 0.10;
          break;
        case 'Dateless':
          $scope.percentageIncrease = 0.20;
      }

      // $scope.input.plateIssued = parseInt($scope.input.plateIssued);
      var originalPriceInputted = parseInt($scope.input.originalPrice);
      $scope.age = $scope.currentDate - (parseInt($scope.input.plateIssued))

      for (var i=1; i<$scope.age + 1; i++) {
        originalPriceInputted = ((originalPriceInputted * $scope.percentageIncrease) + originalPriceInputted)
        console.log("Year: " + i + " " + originalPriceInputted);
      }

      console.log(originalPriceInputted);
      $scope.result = round2Fixed(originalPriceInputted);
      console.log($scope.result);

    }

    function round2Fixed(value) {
      value = +value;

      if (isNaN(value))
        return NaN;

      // Shift
      value = value.toString().split('e');
      value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2) : 2)));

      // Shift back
      value = value.toString().split('e');
      return (+(value[0] + 'e' + (value[1] ? (+value[1] - 2) : -2))).toFixed(2);
    }

}]);
