# Actors
## Guest
Just a bystander who is interesting in art or the idea, potential supporter.  
Can be a company, artist, amputee or other person.
## Amputee
Someone who is unfortunate enough in life and has a need of prosthetic.
Must be able to prove that.
Can be either someone in need of help or a donor of unused, old prosthetic (art)
## Artist
Has interest in using the website as means of attracting attention to themselves.
Wants to help raise money for buying prosthetics via painted used prosthetics 
or is eager to create custom art on a socket that amputee orders.
## Admin
Website manager, someone who can accept and decline requests from artists and amputees.
Uses the website as a way to automate and ease up some of the flow.
## System
Notifications and other automation.

# Use Cases
## Amputee module
### Amputee
#### Request prosthetic. 
The visitor needs to fill in a form, which can be reached by a link in the menu, where the name, email-address and sort of prosthetic is filled in. 
View amputee requests*** means that the admin sees the request and the admin can choose to approve the request.
##### Submit request form

#### View prosthetic request

##### Edit

##### Cancel


### Admin
#### View amputee requests
Means that the admin sees the request and the admin can choose to approve the request.
#### Accept prosthetic request

### System
#### Notify amputee & artist meeting


## Donations module
### Guest
#### View donations page
##### Donate a socket
##### Donate a prosthetic
he/she fills in a form which can be found at the donate link in the menu of the site. The visitor needs to fill in a name, email address
maybe a telephone number. The visitor chooses to donate a prosthetic on the form.
###### Notify next step

##### Donate money
he/she fills in a form which can be found at the donate link in the menu of the site. The visitor needs to fill in a name, email address
maybe a telephone number and the visitor chooses to donate money on the form.
##### Offer support
he/she fills in a form which can be found at the donate link in the menu of the site. The visitor needs to fill in a name, email address
maybe a telephone number and the visitor chooses to donate a add on the form.
### Admin
#### View donations

##### Filter


## Gallery module
### Guest
#### View public gallery
which can also be found as a link in the menu on the site. The images will be sorted with latest one first. 
#### View public gallery with fan submission 
Which can be found as a link in the menu on the site. Here the drawings made by the app are shown
#### Like a picture 
A like would give +1 rep to an artist and +1 rep to the image itself 
#### View artwork
When the visitor goes to the public gallery by clicking on the gallery link. When the visitor then clicks on a image shown in the gallery a modal screen is shown zoomed 
in at the whole screen where the image is shown together with the name of the artist and the email address of the artist so the visitor can contact the artist who made that piece. 
Also  around 3 thumbnails of non-prosthetics) are shown , but also a reference to general other artwork

##### Download

##### Like

##### Share

##### Filter


### Admin
#### Fans gallery
##### Decline

##### Confirm

##### Prioritize

#### Professional gallery

##### Prioritize

#### Share available artists gallery


## Artist module
### Artist
#### Request to become verified artist
by filling in an apply form with the name and email address , send in X images of work he/she made and gets approved or disapproved. 
The admin then gets an email that a artist has applied. 
##### Submit application form

#### View artist application
Their own
##### Edit

##### Cancel

### Admin
#### View artist applications 
When an artist sends in the apply form, there must be 2 pictures of art the artist made.  
In the private gallery all sent in images are shown sorted by the latest first. The status is automatically set to sent-in. 
#### Accept
The admin sets the status to approved by or using a button or a select list. The artist then gets a email that he/she is approved. 
#### Decline
The admin sets the status to disapproved by or using a button or a select list. Also here the artist will receive a email that he/she is disapproved
#### View verified artists

##### Filter by availability


### System
#### Notify old pending requests
When a request is pending for more than 4 weeks, the system should send an email that the request is received but that the submission is on a waiting list. 

## Feedback module
### Guest
#### View info page 
by following the link in the menu on the website. On the info page the visitor can read information about the mission of this project, how it started, it’s 
success stories and comments of the artist involved. 
##### Send feedback

##### View approved feedback


### Admin
#### View pending feedback

##### Accept

##### Decline

