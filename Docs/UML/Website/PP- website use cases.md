# Actors
## Guest
Just a bystander who is interested in prosthetics art or the idea- potential supporter.  
Can be a company, artist, amputee or other person.
## Amputee
Someone who is unfortunate enough in life and has a need of prosthetic.
Must be able to prove that.
Guest becomes amputee after an amputee request submission.
## Artist
Has interest in using the website as means of attracting attention to themselves.
Wants to help raise money for buying prosthetics via painted used prosthetics 
or is eager to create custom art on a socket that amputee orders.
Guest becomes artist after sending artist application.
## Admin
Website manager, someone who can accept and decline requests from artists and amputees.
Uses the website as a way to automate and ease up some of the flow.
Admin has a premade account and there is no way of guest becoming an admin.
If admin wants to do guest-related stuff, they would need to log out.
## System
Notifications and other automation.

# Use Cases
## Amputee module
### Guest
#### Request prosthetic. 
There is a menu option to request a prosthetic. This action redirects to prosthetic request submission form.
##### Submit request form
A formal proof *TO BE DEFINED HERE* must be attached with a request for prosthetic.
Also a name, adress and justification message.
This automatically registers them as artist user and emails the credentials. For more info refer to **Users-Subsystem**
*Is there any way to validate the request form?*
### Amputee
#### View prosthetic request
Able to view their own request: data sent, status, proof.
##### Edit
Change a proof or contact info.
##### Cancel
Delete request entry without any capability of restoring it.
Also deletes amputee account.
### Admin
#### View amputee requests
See pending request with amputee contact info and proof of disability attached.
#### Accept prosthetic request
Set request status to confirmed and send a notification that amputee has chosen an artist.
**Important note**: amputee selection process is manual. Admin does the background check by themselves.
After admin checked the amputee and they are legit, after it is confirmed that there is an available prosthetic unit,
they send a link with available artists and their work to the amputee. Amputee then select the artist they like and let the admin know.
The way communication happens between admin and amputee is up to them.
Only after amputee has chosen an artist, admin accepts the prosthetic request.
### System
#### Notify amputee & artist meeting
After an admin confirm amputee request (means that artist, amputee are known, prosthetic available),
an email is sent to amputee and artist.
The email by itself is just a notification, in order to start a dialogue between the three.

## Donations module
### Guest
#### View donations page
Contain feedback all over the place, also a bunch of thank yous from amputees, artists and supporters of idea.
Also there should be 4 buttons for different kind of donations.
##### Donate a socket
A sockets is the most visible part in a prosthetic, where it mounts.
Donating just a socket is useful, because it can be painted on and it's cheaper than a whole prosthetic.
The donor fills a form with their contact info, so that admin can refer back to them.
Mandatory: email.
##### Donate a prosthetic
Donating a prosthetic can either mean a new prosthetic (most likely company) or old prosthetic (personal, unsued).
The donor fills a form with their contact info, so that admin can refer back to them.
Mandatory: email.
##### Donate money
he/she fills in a form which can be found at the donate link in the menu of the site. The visitor needs to fill in a name, email address
maybe a telephone number and the visitor chooses to donate money on the form.
##### Offer support
he/she fills in a form which can be found at the donate link in the menu of the site. The visitor needs to fill in a name, email address
maybe a telephone number and the visitor chooses to donate a add on the form.
### Admin
#### View donations
See all historic donations: from whom and what (type), note and date.
##### Filter
By donor, donation typoe and date.
### System
#### Notify next step after prosthetics or socket donation
After a donation is made, a donor gets emailed the next steps, thanks, etc.

## Gallery module
### Guest
#### View fans gallery
Art that comes from drawing app. Images sorted by latest.
#### View pro gallery 
Art that comes from confirmed artists. Focus on prosthetics, but mixed with their professional artwork.
#### View artwork
Clicking on an image shows a modal window with image zoomed.
The center-piece of an image is prosthetic. Next to it, there are around 3 thumbnails of non-prosthetics art.
Also contact info to artist (optional)
##### Download
Image can be downloaded free of charge
##### Like image
Work both in amateru and pro galleries.
A like would give +1 rep to an artist and +1 rep to the image itself.
##### Share
Clicking share button would copy a link to image in a clipboard.
Refers to the gallery part the image is taken from.
##### Filter
Images can be filtered by author, datetime, likes.

### Admin
#### Fans gallery
##### Decline
Decline art from drawing app.
##### Confirm
Accept art from drawing app.
##### Prioritize
Arrange top visible art in fans gallery.
#### Professional gallery
##### Prioritize
Arrange top visible art in professional gallery.
#### Share available artists gallery
After artist is confirmed, they end up with some sort of availability status that they can update to available.
All artwork of available artists can be pulled down in a kind-off secret gallery that an admin can share.
It's not really a secret gallery, but the link to it is not visible in public website.

## Artist module
### Artist
#### Request to become verified artist
A guest can request to be a verified artist. This redirects them to an application form.
##### Submit application form
Requires contact info and a link to portfolio.
This automatically registers them as artist user and emails the credentials.
#### View artist application
After artist is logged in, they can view their own applciation.
##### Edit
All the info they submitted can be edited
##### Cancel
Request can be canceled at any time (even after approval). This will result in both request and account removal.
### Admin
#### View artist applications 
All pending, verified and **past (need to figure out how we keep history)** requests are displayed with all the contact info and link to portfolio.
#### Accept
The admin sets the status to approved by using a button. The artist then gets a email that he/she is approved. 
#### Decline
The admin sets the status to disapproved by or using a button or a select list. Also here the artist will receive a email that he/she is disapproved
This also results deleting both the request and a pending artist account.
#### View verified artists
Admin can generate a gallery with artwork of only artists, who flagged themselves as available.
##### Filter by availability
See only already confirmed artists. And filter them by statuses: avaiable, not available for period of time, not available for indefinite period of time.
This automatically registers them as artist user and emails the credentials.
### System
#### Notify old pending requests
When a request is pending for more than 4 weeks, the system should send an email that the request is received but that the submission is on a waiting list. 

## Feedback module
### Guest
##### Send feedback
Anyone can send feedback, but it won't be visible publicly until admin approves it.
##### View approved feedback
Only feedback that is approved by the admin can be viewed
### Admin
#### View pending feedback
Sees only pending feedback
##### Accept
Can accept feedback of random people. Accepting it places feedback randomly on the feedback page and the related pages.
##### Decline
Declining feedback removes pending feedback entry.

## Users module
### System
#### Register
Registration process is automated after a request is made (either amputee or artist).
Admin account is premade.
### Amputee, Artist, Admin
#### Login
In order to do role-sepcific things, a login is needed.
### System
#### Remove registration
After a request is declined or willingly canceled, a system deletes account.
#### Notify about personal data removal
After account gets deleted, a notification is sent to a former user in order to comply to GDPR.

## Contact module
### Guest
#### View homepage
#### View contacts
#### Contact

## Porfolio module
### Guest
#### View artist portfolios
##### Filter portfolios
##### View artists porfolio
###### Get contact info
###### View highlight artwork
###### View other art of portfolio
###### View painted prosthetic
### Artist
#### Manage portfolio
##### Edit contact info
##### Select main image
##### Add image to portfolio
##### Select top images




