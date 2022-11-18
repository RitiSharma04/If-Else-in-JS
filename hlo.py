# A,B=map(int, input().split())
# sum=0
# li=[6,2,5,5,4,5,6,3,7,6]
# s=A+B
# print(s)
# for i in range(s):
#         d=s%10
#         sum+=li[d]
#         s=s//10
# print(sum) 

# A,B,X,Y=map(int,input().split())
# if A==B:
#     print("YES")
# elif A>B:
#     for i in range(Y):
#         if Y>0:
#             a=A-((Y+1)-Y)
#             if a==B:
#                 print("YES")
#                 break
#             else:
#                 Y=Y-1
#         else:
#             print("NO")        
# elif A<B:
#     for j in range(X):
#         if X>0:
#             b=A+((X+1)-Y)
#             if b==B:
#                 print("Yes")
#             else:
#                 X=X-1                
#         else:
#             print("NO")


# n=int(input())
# S=input()
# a=""
# b=""
# if len(S)%2==0:
#     for i in range(len(S)):
#         if i%2!=0:
            
#         else:
#             b+=S[i]
# else:
#     print("NO")            
# N=int(input())


# def num(arr):
#     for i in arr:
#         if all(item == 1 for item in arr):  
#             print(len(arr))  
#         else:    
#             a=[]
#             for j in arr:
#                 if j>1:
#                     for k in range(j):
#                         a.append(j-1)
#                 elif j==1:
#                     a.append(j)
#             arr=a 
#     print(len(arr))    
# N=int(input())    
# arr=[int(i) for i in input().split()]
# num(arr)   


# T=int(input())
# for i in range(T):
#     A,B,X,Y=map(int,input().split())
#     if A==B:
#         print("YES")
#     elif A>B:
#         for i in range(Y):
#             if A-i==B:
#                 print("YES")
#                 break
#             else:
#                 print("NO")  
        
#     elif A<B:
#         for j in range(X):
#             if X>0:
#                 b=A+((X+1)-Y)
#                 if b==B:
#                     print("Yes")
#                 else:
#                     X=X-1                
#             else:
#                 print("NO")   


# D,L,R=map(int,input().split())
# if D>=L and D<=R:
#     print("Take second dose now")
# if D>=L and D>R:
#         print("Too Late")
# elif D<L and D<=R:
#         print("Too Early")

# N=int(input()) #take the size
# Array=list(map(int, input().split()[:N*2]))
# a=[]
# b=[]# cook your dish here
# for i in range(len(Array)):
#       if Array[i] not in b:
#                 a.append(Array[i])
#         else:
#                 b.append(Array[i])
# print(a)
# print(b)
# N=int(input()) #take the size
# a={}
# Array=list(map(int, input().split()[:N*2]))
# s=0
# for i in range(len(Array)):
#         for j in range(len(Array)):
# a.update({Array[i]:s})
# print(a)   
# c=0
# for i in range(len(Array)):
#         for j in range(len(Array)):
#                 if Array[i]==Array[j]:
#                         c+=1
#         if c==2:                        
#                 print(Array[i])    

# a=[]
# b=[]# cook your dish here
# a = Array[:len(Array)//2]
# b = Array[len(Array)//2:]
# print(a) 
# print(b) 

# a=[3,3,5,28,952,49,93,0,952,49,93,0]
# b={}
# for i in range(len(a)):
#         c=0
#         for j in range(len(a)):
#                 if a[i]==a[j]:
#                         c+=1
#         b[a[i]]=c
# print(b)        


N=int(input()) #take the size
a=list(map(int, input().split()))
b=[]
for i in range(len(a)):
        c=0
        for j in range(len(a)):
                if a[i]==a[j]:
                        c+1
        b.append(c)
f=False
for j in range(len(b)):
        if b[j]<=2:
            f=True
if f==False:
        print("No")
else:
        print("YES")
